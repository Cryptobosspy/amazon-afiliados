export default function ProductCard({ product }) {
  const imageUrl = product.image
    ? product.image
    : `https://images-na.ssl-images-amazon.com/images/I/${product.asin}.jpg`

  return (
    <div className="border rounded-lg p-4 flex flex-col hover:shadow-lg transition">
      <img
        src={imageUrl}
        alt={product.title}
        className="h-40 object-contain mb-3"
        loading="lazy"
      />

      {product.badge && (
        <span className="text-xs bg-red-600 text-white px-2 py-1 rounded mb-2 inline-block">
          {product.badge}
        </span>
      )}

      <h3 className="font-semibold text-sm mb-2">{product.title}</h3>

      {product.price && (
        <p className="text-green-700 font-bold mb-3">{product.price}</p>
      )}

      <a
        href={product.affiliate_url}
        target="_blank"
        rel="nofollow sponsored"
        className="mt-auto bg-yellow-400 text-center py-2 rounded hover:bg-yellow-500 font-semibold"
      >
        Ver precio en Amazon
      </a>
    </div>
  )
}
