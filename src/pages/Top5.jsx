import top5 from "../data/top5"
import TopProductRow from "../components/TopProductRow"
import { useLanguage } from "../i18n/LanguageContext";

export default function Top5() {
  const { t } = useLanguage();

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Top 5 Mejores Auriculares Bluetooth
      </h1>

      <p className="text-gray-600 mb-10">
        Comparativa actualizada con las mejores opciones calidad-precio.
      </p>

      <div className="space-y-6">
        {top5.map(product => (
          <TopProductRow key={product.rank} product={product} />
        ))}
      </div>
    </main>
  )
}
