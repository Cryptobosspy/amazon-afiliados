import ProductCard from "../components/ProductCard"
import CategoryGrid from "../components/CategoryGrid"
import products from "../data/products"
import top5 from "../data/top5"

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">

      {/* HERO */}
      <section className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          Las mejores ofertas en Amazon 🔥
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Productos seleccionados, comparados y recomendados para comprar mejor.
        </p>
      </section>

      {/* CATEGORÍAS */}
      <section className="mb-14">
        <CategoryGrid />
      </section>

      {/* TOP 5 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          🏆 Top 5 productos más recomendados
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {top5.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* OFERTAS */}
      <section>
        <h2 className="text-2xl font-bold mb-6">
          💥 Ofertas destacadas
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </main>
  )
}
