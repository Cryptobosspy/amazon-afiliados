import { createContext, useState } from "react";
import { translations } from "./translations"; // 👈 IMPORT CORRECTO

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");

  function t(key) {
    return translations[language]?.[key] || key;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
