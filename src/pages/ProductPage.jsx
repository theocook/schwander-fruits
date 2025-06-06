import React, { useState, useMemo, useEffect } from 'react';
import { products } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const mainCategories = ['Tous', 'Fruits', 'Légumes', 'Autres'];

const ProductPage = () => {
  const [activeMain, setActiveMain] = useState('Tous');
  const [activeSub, setActiveSub] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [subOpen, setSubOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const subCategories = useMemo(() => {
    if (activeMain === 'Fruits') return ['Tous les fruits', 'Pommes', 'Poires', 'Cerises', 'Abricots', 'Pêches'];
    if (activeMain === 'Légumes') return ['Tous les légumes', 'Pommes de terre', 'Légumes verts'];
    return [];
  }, [activeMain]);

  useEffect(() => {
    setActiveSub(subCategories[0] || null);
  }, [subCategories]);

  const filtered = useMemo(() =>
    products.filter(p => {
      const term = searchTerm.toLowerCase();
      const matchesSearch = p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term);

      if (activeMain === 'Tous') return matchesSearch;
      if (activeMain === 'Fruits') {
        const cats = ['Pommes', 'Poires', 'Cerises', 'Abricots', 'Pêches'];
        if (activeSub === 'Tous les fruits') return matchesSearch && cats.includes(p.category);
        return matchesSearch && p.category === activeSub;
      }
      if (activeMain === 'Légumes') {
        const cats = ['Pommes de terre', 'Légumes verts'];
        if (activeSub === 'Tous les légumes') return matchesSearch && cats.includes(p.category);
        return matchesSearch && p.category === activeSub;
      }
      return matchesSearch && p.category === 'Autres produits';
    }),
    [activeMain, activeSub, searchTerm]
  );

  return (
    <main className="container" style={{ padding: isMobile ? '1rem' : '2rem' }}>
      <h2 style={{ textAlign: 'center', color: '#3a6f4b', marginBottom: '1rem' }}>
        Découvre notre sélection
      </h2>

      {/* Champ de recherche */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1rem'
        }}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="🔍 Rechercher un produit..."
          style={{
            width: '100%',
            maxWidth: '500px',
            padding: '0.75rem 1rem',
            borderRadius: '999px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />
      </motion.div>

      {/* Catégories principales (scroll horizontal) */}
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '0.75rem',
        padding: '0.5rem 0',
        marginBottom: '0.5rem'
      }}>
        {mainCategories.map(cat => (
          <motion.button
            key={cat}
            onClick={() => { setActiveMain(cat); setSearchTerm(''); }}
            whileTap={{ scale: 0.95 }}
            style={{
              flexShrink: 0,
              padding: '0.5rem 1rem',
              borderRadius: '999px',
              border: '1px solid',
              borderColor: activeMain === cat ? '#2a7f62' : '#ccc',
              background: activeMain === cat ? '#e6f4ec' : 'white',
              color: activeMain === cat ? '#2a7f62' : '#555',
              fontWeight: activeMain === cat ? 600 : 400,
              cursor: 'pointer'
            }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Sous-catégories (accordion) */}
      <AnimatePresence>
        {subCategories.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: 'hidden',
              marginBottom: '1rem'
            }}
          >
            <div
              onClick={() => setSubOpen(!subOpen)}
              style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '0.5rem' }}
            >
              <ChevronDown
                size={18}
                style={{ marginRight: '0.5rem', transform: subOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}
              />
              <span style={{ fontWeight: 600, color: '#2a7f62' }}>Sous-catégories</span>
            </div>

            {subOpen && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {subCategories.map(sub => (
                  <motion.button
                    key={sub}
                    onClick={() => setActiveSub(sub)}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '0.4rem 0.8rem',
                      borderRadius: '6px',
                      border: '1px solid',
                      borderColor: activeSub === sub ? '#2a7f62' : '#ccc',
                      background: activeSub === sub ? '#d8f0e3' : 'white',
                      color: activeSub === sub ? '#2a7f62' : '#555',
                      fontWeight: activeSub === sub ? 600 : 400,
                      cursor: 'pointer'
                    }}
                  >
                    {sub}
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grille de produits */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1rem'
      }}>
        {filtered.map(prod => (
          <motion.div
            key={prod.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'relative',
              height: isMobile ? '180px' : '220px',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundImage: `url(/photos/produits/${prod.id}.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.2)' }} />
            <div style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              backgroundColor: 'rgba(255,255,255,0.85)',
              padding: '0.5rem'
            }}>
              <h4 style={{ margin: 0, fontSize: '1rem', color: '#2a7f62' }}>{prod.name}</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>{prod.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default ProductPage;
