import { useLanguage } from "../i18n/LanguageContext";

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage("es")}
        className={`px-2 py-1 rounded ${
          language === "es" ? "bg-black text-white" : "bg-gray-200"
        }`}
      >
        ES
      </button>

      <button
        onClick={() => changeLanguage("en")}
        className={`px-2 py-1 rounded ${
          language === "en" ? "bg-black text-white" : "bg-gray-200"
        }`}
      >
        EN
      </button>
    </div>
  );
}
