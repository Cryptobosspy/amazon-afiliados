import { useEffect, useState } from "react"
import { supabase } from "../services/supabase"
import ProductCard from "../components/ProductCard"
import CategoryGrid from "../components/CategoryGrid"

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error cargando productos:", error)
    } else {
      setProducts(data || [])
    }
    setLoading(false)
  }

  // 🔥 TOP 5 automático
  const top5 = products.slice(0, 5)

  // 🔥 Categoría Ofertas
  const offers = products.filter(p =>
    p.badge?.toLowerCase().includes("oferta")
  )

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">

      {/* HERO */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Mejores productos recomendados en Amazon
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comparativas reales, ofertas actualizadas y enlaces directos a Amazon.
        </p>
      </section>

      {/* CATEGORÍAS */}
      <CategoryGrid />

      {/* TOP 5 */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">
          🔥 Top 5 más vendidos
        </h2>

        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {top5.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* OFERTAS */}
      {offers.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">
            💰 Ofertas destacadas
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {offers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* AVISO AMAZON */}
      <footer className="mt-20 text-center text-sm text-gray-500">
        Como afiliado de Amazon, percibo ingresos por compras elegibles.
      </footer>
    </main>
  )
}
