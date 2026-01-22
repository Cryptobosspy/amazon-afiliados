import { useLanguage } from "../i18n/LanguageContext"

export default function Privacy() {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{t.privacyTitle}</h1>
      <p>
        {t.privacyContent}
      </p>
    </div>
  )
}
