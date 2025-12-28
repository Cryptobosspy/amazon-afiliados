import { useLang } from "../i18n/LanguageContext"

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="text-xs text-center py-8">
      {t.legal}
    </footer>
  )
}

