import { useLanguage } from "../i18n/LanguageContext"

export default function Legal() {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{t.legalTitle}</h1>
      <p className="mb-2">{t.affiliateDisclosure}</p>
      <p>
        {t.legalContent}
      </p>
    </div>
  )
}
