import React from "react";
import ProductCard from "./ProductCard";

export default function CategoryGrid({ categoryName, products }) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      {/* Título de la categoría */}
      <h2 className="text-2xl font-bold mb-4">{categoryName}</h2>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
