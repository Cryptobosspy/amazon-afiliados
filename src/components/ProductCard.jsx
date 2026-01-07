export default function ProductCard({ product }) {
  if (!product) return null

  const {
    title,
    image,
    price,
    badge,
    affiliate_url,
  } = product

  return (
    <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      
      {/* Imagen */}
      <div className="relative">
        {badge && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
            {badge}
          </span>
        )}

        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-56 object-contain bg-white p-4"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-3 mb-2">
          {title}
        </h3>

        {price && (
          <p className="text-lg font-bold text-green-700 mb-3">
            {price}
          </p>
        )}

        {/* CTA */}
        <a
          href={affiliate_url}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="mt-auto block text-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl transition-colors"
        >
          Ver oferta en Amazon
        </a>
      </div>
    </article>
  )
}
