import { useEffect, useState } from "react"
import { supabase } from "../services/supabase"

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false })

      if (!error) setProducts(data)
      setLoading(false)
    }

    fetchProducts()
  }, [])

  if (loading) return <p>Cargando productos...</p>

  return (
    <div>
      <h1>Ofertas destacadas</h1>

      {products.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ddd",
            padding: 16,
            marginBottom: 16
          }}
        >
          {p.image_url && (
            <img
              src={p.image_url}
              alt={p.title}
              loading="lazy"
              width="200"
            />
          )}

          <h3>{p.title}</h3>

          {p.badge && (
            <span style={{ color: "red" }}>
              {p.badge}
            </span>
          )}

          {p.price && <p>{p.price}</p>}

          <a
            href={p.affiliate_url}
            target="_blank"
            rel="nofollow sponsored"
          >
            Ver precio en Amazon
          </a>

          <p style={{ fontSize: 12, marginTop: 8 }}>
            Como afiliado de Amazon, percibo ingresos
            por compras elegibles.
          </p>
        </div>
      ))}
    </div>
  )
}

