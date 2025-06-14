import React, { useState, useEffect, useMemo } from "react";
import { products } from '../data/products';
import "../index.css";

const categories = ["Tous", "Fruits", "Légumes", "Autres"];

const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

 const categoryMap = {
  Fruits: ["Pommes", "Poires", "Cerises", "Prunes", "Pruneaux", "Pêches", "Abricots"],
  Légumes: ["Légumes", "Pommes de terre"],
  Autres: ["Autres produits"]
};

const filteredProducts = useMemo(() => {
  return products.filter((product) => {
    const name = product.name ? product.name.toLowerCase() : "";
    const description = product.description?.toLowerCase() || "";
    const subcategory = product.subcategory?.toLowerCase() || "";

    const matchesSearch =
      !searchTerm ||
      name.includes(searchTerm.toLowerCase()) ||
      description.includes(searchTerm.toLowerCase()) ||
      subcategory.includes(searchTerm.toLowerCase());

    if (selectedCategory === "Tous") return matchesSearch;

    const validCategories = categoryMap[selectedCategory] || [];
    return matchesSearch && validCategories.includes(product.category);
  });
}, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 scroll-smooth">
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-700 to-emerald-800">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Découvre notre sélection
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Une collection exceptionnelle de produits frais et savoureux, 
              sélectionnés avec passion pour leur qualité incomparable
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 text-lg rounded-2xl border-0 shadow-2xl focus:ring-4 focus:ring-green-300 focus:outline-none bg-white/95 backdrop-blur-sm placeholder-gray-500"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L1440 120L1440 0C1200 40 800 80 0 40V120Z" fill="rgb(249 250 251)"/>
          </svg>
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-green-300"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Season Badge */}
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {product.season}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium text-green-600 uppercase tracking-wide">
                    {product.subcategory}
                  </p>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Origin */}
                <div className="flex items-center mb-4 text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Origine: {product.origin}
                </div>

                {/* Characteristics Tags */}
                <div className="flex flex-wrap gap-2">
                  {product.characteristics.map((char, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-xs font-medium rounded-full border border-green-200"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-green-50">
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun produit trouvé</h3>
            <p className="text-gray-600">Essayez de modifier vos critères de recherche</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;