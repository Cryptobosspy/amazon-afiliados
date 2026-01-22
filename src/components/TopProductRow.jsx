import React from "react";
import ProductCard from "./ProductCard";
import { useLanguage } from "../i18n/LanguageContext";

export default function TopProductRow({ products }) {
  const { t } = useLanguage();

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">{t.topProducts || "TOP 5 Productos"}</h2>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
