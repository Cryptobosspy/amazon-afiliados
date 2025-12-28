import ProductCard from "./ProductCard"
import products from "../data/products"

export default function CategoryGrid() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}
