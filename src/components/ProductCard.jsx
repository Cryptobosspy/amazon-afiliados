import { useLanguage } from "../i18n/LanguageContext";

export default function ProductCard({ product }) {
  const { t } = useLanguage();

  return (
    <div className="border rounded-xl shadow-sm p-4 flex flex-col items-center bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />

      {product.badge && (
        <span className="inline-block bg-yellow-400 text-black text-xs font-bold uppercase px-2 py-1 rounded mb-2">
          {product.badge}
        </span>
      )}

      <h3 className="text-base font-semibold text-center mb-2">
        {product.title}
      </h3>

      {product.price && (
        <p className="text-green-600 font-bold mb-4">{product.price}</p>
      )}

      <a
        href={product.affiliate_url}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="w-full text-center bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        {t.buyNow}
      </a>
    </div>
  );
}
