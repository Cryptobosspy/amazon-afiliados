import { useLang } from "../i18n/LanguageContext"

export default function TopProductRow({ product }) {
  const { t } = useLang()

  return (
    <article className="bg-white rounded-xl shadow-sm p-4 grid gap-4 md:grid-cols-[80px_1fr_200px] items-center">
      
      {/* Ranking */}
      <div className="text-center font-bold text-xl">
        #{product.rank}
      </div>

      {/* Info */}
      <div className="flex gap-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-24 h-24 object-contain"
          loading="lazy"
        />

        <div>
          <h3 className="font-semibold mb-1">{product.title}</h3>

          <span className="badge badge-offer mb-2 inline-block">
            {product.badge}
          </span>

          <ul className="text-sm text-gray-600 list-disc ml-4">
            {product.pros.map((pro, i) => (
              <li key={i}>✅ {pro}</li>
            ))}
            {product.cons.map((con, i) => (
              <li key={i}>❌ {con}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="font-bold mb-2">{product.price}</p>
        <a
          href={product.affiliate_url}
          target="_blank"
          rel="nofollow sponsored"
          className="amazon-btn"
        >
          {t.ctaAmazon}
        </a>
      </div>

    </article>
  )
}
