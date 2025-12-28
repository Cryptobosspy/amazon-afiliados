import { createContext, useContext, useState, useEffect } from "react"
import translations from "./translations"

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es")

  useEffect(() => {
    const saved = localStorage.getItem("lang")
    if (saved) setLang(saved)
  }, [])

  const changeLanguage = (newLang) => {
    setLang(newLang)
    localStorage.setItem("lang", newLang)
  }

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)

