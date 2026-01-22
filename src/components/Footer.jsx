import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="max-w-5xl mx-auto text-center">
        <p className="mb-2">{t.affiliateDisclosure}</p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Amazon Afiliados. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
