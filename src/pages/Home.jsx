import CategoryGrid from "../components/CategoryGrid"

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">
        Mejores Ofertas en Amazon Hoy
      </h1>

      <CategoryGrid />
    </main>
  )
}
