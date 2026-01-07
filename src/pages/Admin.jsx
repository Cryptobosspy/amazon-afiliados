import { useState, useEffect } from "react";
import { supabase } from "../services/supabase";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    price: "",
    badge: "",
    affiliate_url: "",
    image: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data, error } = await supabase.from("products").select("*");
    if (error) console.error(error);
    else setProducts(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { error } = await supabase.from("products").insert([form]);
    if (error) console.error(error);
    else {
      alert("Producto agregado!");
      setForm({ title: "", price: "", badge: "", affiliate_url: "", image: "" });
      fetchProducts();
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md mb-6 max-w-lg"
      >
        <input
          type="text"
          placeholder="Título"
          className="input"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Precio"
          className="input"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Badge (Oferta / Top Ventas)"
          className="input"
          value={form.badge}
          onChange={(e) => setForm({ ...form, badge: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enlace Afiliado"
          className="input"
          value={form.affiliate_url}
          onChange={(e) => setForm({ ...form, affiliate_url: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="URL Imagen"
          className="input"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Agregar Producto
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white p-4 rounded shadow flex flex-col justify-between"
          >
            <img src={p.image} alt={p.title} className="h-32 object-contain mb-2" />
            <h2 className="font-bold">{p.title}</h2>
            <p>{p.price}</p>
            <p className="text-sm text-gray-500">{p.badge}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

