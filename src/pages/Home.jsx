import CategoryGrid from "../components/CategoryGrid"
import { useLang } from "../i18n/LanguageContext"

export default function Home() {
  const { t } = useLang()

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">
        {t.siteTitle}
      </h1>

      <CategoryGrid />
    </main>
  )
}

