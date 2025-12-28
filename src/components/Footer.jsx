import { useLang } from "../i18n/LanguageContext"

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="text-xs text-center text-gray-500 py-8 mt-16">
      {t.legal}
    </footer>
  )
}

