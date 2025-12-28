import { useLang } from "../i18n/LanguageContext"

export default function ProductCard({ product }) {
  const { t } = useLang()

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain mb-4"
        loading="lazy"
      />

      <h3 className="text-sm font-semibold mb-2 flex-grow">
        {product.title}
      </h3>

      {product.badge && (
        <span className={`badge mb-2 ${product.badge === "Top" ? "badge-top" : "badge-offer"}`}>
          {product.badge}
        </span>
      )}

      <p className="text-lg font-bold mb-1">{product.price}</p>

      <p className="text-xs text-gray-500 mb-3">
        {t.lastUpdate}: {product.updated}
      </p>

      <a
        href={product.affiliate_url}
        target="_blank"
        rel="nofollow sponsored"
        className="amazon-btn"
      >
        {t.ctaAmazon}
      </a>
    </div>
  )
}

