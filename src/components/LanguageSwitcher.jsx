import { useLang } from "../i18n/LanguageContext"

export default function LanguageSwitcher() {
  const { lang, changeLanguage } = useLang()

  return (
    <div className="flex gap-2 text-sm">
      <button
        onClick={() => changeLanguage("es")}
        className={lang === "es" ? "font-bold" : ""}
      >
        ES
      </button>
      |
      <button
        onClick={() => changeLanguage("en")}
        className={lang === "en" ? "font-bold" : ""}
      >
        EN
      </button>
    </div>
  )
}
