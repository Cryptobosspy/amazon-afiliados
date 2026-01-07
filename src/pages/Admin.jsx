import { useEffect, useState } from "react"
import { supabase } from "../services/supabase"
import { extractAsin } from "../utils/extractAsin"

export default function Admin() {
  const [products, setProducts] = useState([])
  const [form, setForm] = useState({
    title: "",
    price: "",
    badge: "",
    affiliate_url: ""
  })

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false })

    if (!error) setProducts(data || [])
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const asin = extractAsin(form.affiliate_url)
    if (!asin) {
      alert("No se pudo detectar el ASIN del link de Amazon")
      return
    }

    await supabase.from("products").insert([
      {
        ...form,
        asin
      }
    ])

    setForm({ title: "", price: "", badge: "", affiliate_url: "" })
    loadProducts()
  }

  const handleDelete = async (id) => {
    if (!confirm("¿Eliminar producto?")) return
    await supabase.from("products").delete().eq("id", id)
    loadProducts()
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Panel Admin</h1>

      <form onSubmit={handleSubmit} className="grid gap-3 md:grid-cols-2 mb-10">
        <input className="input" name="title" placeholder="Título" value={form.title} onChange={handleChange} required />
        <input className="input" name="price" placeholder="Precio" value={form.price} onChange={handleChange} />
        <input className="input" name="badge" placeholder="Badge (Oferta / Top)" value={form.badge} onChange={handleChange} />
        <input
          className="input md:col-span-2"
          name="affiliate_url"
          placeholder="Link afiliado Amazon"
          value={form.affiliate_url}
          onChange={handleChange}
          required
        />
        <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700 md:col-span-2">
          Agregar producto
        </button>
      </form>

      <div className="grid gap-4 md:grid-cols-3">
        {products.map(p => (
          <div key={p.id} className="border rounded p-3">
            <img
              src={`https://images-na.ssl-images-amazon.com/images/I/${p.asin}.jpg`}
              alt={p.title}
              className="h-40 mx-auto object-contain"
            />
            <h3 className="font-semibold mt-2">{p.title}</h3>
            {p.price && <p className="text-green-700 font-bold">{p.price}</p>}
            {p.badge && (
              <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded">
                {p.badge}
              </span>
            )}
            <div className="mt-3 flex justify-between">
              <a
                href={p.affiliate_url}
                target="_blank"
                rel="nofollow sponsored"
                className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
              >
                Amazon
              </a>
              <button onClick={() => handleDelete(p.id)} className="text-red-600">
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
