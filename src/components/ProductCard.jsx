export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-3"
        loading="lazy"
      />

      <h3 className="font-semibold text-sm mb-2">
        {product.title}
      </h3>

      {product.badge && (
        <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded mb-2">
          {product.badge}
        </span>
      )}

      <p className="text-lg font-bold mb-1">
        {product.price}
      </p>

      <p className="text-xs text-gray-500 mb-3">
        Última actualización: {product.updated}
      </p>

      <a
        href={product.affiliate_url}
        target="_blank"
        rel="nofollow sponsored"
        className="block text-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg"
      >
        Ver precio en Amazon
      </a>
    </div>
  )
}
