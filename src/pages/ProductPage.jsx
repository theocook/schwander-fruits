// src/pages/ProductPage.jsx
import React, { useState, useMemo, useEffect } from 'react';
import { products } from '../data/products';

const mainCategories = ['Tous les produits', 'Fruits', 'Légumes', 'Autres'];

const ProductPage = () => {
  const [activeMain, setActiveMain] = useState('Tous les produits');
  const [activeSub, setActiveSub] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll to top on search
  useEffect(() => {
    if (searchTerm) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [searchTerm]);

  // Define subcategories based on main category
  const subCategories = useMemo(() => {
    if (activeMain === 'Fruits') return ['Tous les fruits', 'Pommes', 'Poires', 'Cerises', 'Prunes', 'Pruneaux', 'Pêches', 'Abricots', "Fruits d'été"];
    if (activeMain === 'Légumes') return ['Tous les légumes', 'Légumes', 'Pommes de terre'];
    return [];
  }, [activeMain]);

  // Initialize subcategory when main changes
  useEffect(() => {
    setActiveSub(subCategories.length ? subCategories[0] : null);
  }, [subCategories]);

  // Filter products by main, subcategory and search (name or category)
  const filtered = useMemo(() =>
    products.filter(p => {
      const term = searchTerm.toLowerCase();
      const matchesSearch = p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term);

      if (activeMain === 'Tous les produits') return matchesSearch;
      if (activeMain === 'Fruits') {
        const fruitCats = ['Pommes', 'Poires', 'Cerises', 'Prunes', 'Pruneaux', 'Pêches', 'Abricots', "Fruits d'été"];
        if (activeSub === 'Tous les fruits') return matchesSearch && fruitCats.includes(p.category);
        return matchesSearch && p.category === activeSub;
      }
      if (activeMain === 'Légumes') {
        const vegCats = ['Légumes', 'Pommes de terre'];
        if (activeSub === 'Tous les légumes') return matchesSearch && vegCats.includes(p.category);
        return matchesSearch && p.category === activeSub;
      }
      // Autres
      return matchesSearch && p.category === 'Autres produits';
    }),
    [activeMain, activeSub, searchTerm]
  );

  return (
    <main className="container" style={{ padding: isMobile ? '1rem 1rem' : '2rem 1rem' }}>
      <h2 style={{ color: '#3a6f4b', textAlign: 'center', marginBottom: isMobile ? '1rem' : '2rem' }}>Notre sélection de produits</h2>

      {/* Sticky search & filters container */}
      <div style={{
        position: 'sticky',
        top: isMobile ? '60px' : '80px',
        backgroundColor: '#fafafa',
        zIndex: 50,
        padding: isMobile ? '0.5rem 0' : '1rem 0'
      }}>
        {/* Search */}
        <div style={{ margin: isMobile ? '0.25rem 0' : '0.5rem 0' }}>
          <input
            type="text"
            placeholder="Rechercher un produit ou catégorie..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: isMobile ? '0.5rem' : '0.75rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '1rem'
            }}
          />
        </div>
        {/* Main categories */}
        <div style={{ display: 'flex', gap: isMobile ? '0.5rem' : '1rem', flexWrap: 'wrap', margin: isMobile ? '0.25rem 0' : '0.5rem 0' }}>
          {mainCategories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveMain(cat); setSearchTerm(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{
                padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
                border: 'none',
                borderBottom: activeMain === cat ? '3px solid #2a7f62' : '3px solid transparent',
                background: 'none',
                cursor: 'pointer',
                fontWeight: activeMain === cat ? '600' : '400',
                color: activeMain === cat ? '#2a7f62' : '#555',
                fontSize: isMobile ? '0.9rem' : '1rem'
              }}
            >{cat}</button>
          ))}
        </div>
        {/* Subcategory */}
        {subCategories.length > 0 && (
          <div style={{ display: 'flex', gap: isMobile ? '0.5rem' : '0.75rem', flexWrap: 'wrap', marginBottom: isMobile ? '0.25rem' : '0.5rem' }}>
            {subCategories.map(sub => (
              <button
                key={sub}
                onClick={() => { setActiveSub(sub); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                style={{
                  padding: isMobile ? '0.3rem 0.6rem' : '0.4rem 0.8rem',
                  border: activeSub === sub ? '2px solid #2a7f62' : '1px solid #ccc',
                  background: activeSub === sub ? '#e6f4ec' : 'white',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  color: activeSub === sub ? '#2a7f62' : '#555',
                  fontSize: isMobile ? '0.8rem' : '0.9rem'
                }}
              >{sub}</button>
            ))}
          </div>
        )}
      </div>

      {/* Product cards grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: isMobile ? '0.5rem' : '1rem'
      }}>
        {filtered.map(prod => (
          <div
            key={prod.id}
            style={{
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              height: isMobile ? '180px' : '220px',
              backgroundImage: `url(/photos/produits/${prod.id}.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.2)' }} />
            <div style={{
              position: 'absolute', bottom: 0, width: '100%',
              backgroundColor: 'rgba(255,255,255,0.8)', padding: isMobile ? '0.5rem' : '0.75rem'
            }}
            >
              <h4 style={{ margin: 0, color: '#333', fontSize: isMobile ? '1rem' : '1.1rem' }}>{prod.name}</h4>
              <p style={{ margin: 0, fontSize: isMobile ? '0.75rem' : '0.85rem', color: '#666' }}>{prod.category}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductPage;
