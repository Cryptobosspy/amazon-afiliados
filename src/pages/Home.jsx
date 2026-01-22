import { top5Products, products } from "../data/products";
import CategoryGrid from "../components/CategoryGrid";
import { useLanguage } from "../i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      <CategoryGrid title={t.topProducts} products={top5Products} />
      <CategoryGrid title={t.offers} products={products} />
    </div>
  );
}
