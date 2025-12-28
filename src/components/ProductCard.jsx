import { useLang } from "../i18n/LanguageContext"

export default function ProductCard({ product }) {
  const { t } = useLang()

  return (
    <div>
      <p className="text-xs">
        {t.lastUpdate}: {product.updated}
      </p>

      <a
        href={product.affiliate_url}
        target="_blank"
        rel="nofollow sponsored"
      >
        {t.ctaAmazon}
      </a>
    </div>
  )
}

