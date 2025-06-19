// src/components/Header.jsx
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Accueil' },
  { path: '/products', label: 'Produits' },
  { path: '/about', label: 'À propos' },
  { path: '/contact', label: 'Contact' }
];

const Header = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (!menuOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowHeader(false); // scroll vers le bas
        } else {
          setShowHeader(true); // scroll vers le haut
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, menuOpen]);

  const isHome = pathname === '/';
  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    height: isMobile ? '60px' : '80px',
    transform: showHeader ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.5s ease-in-out, background-color 0.3s ease, box-shadow 0.3s ease',
    backgroundColor: (isHome && !isScrolled && !menuOpen) ? 'transparent' : 'rgba(248, 248, 248, 1)',
    boxShadow: (isHome && !isScrolled && !menuOpen) ? 'none' : '0 2px 8px rgba(0,0,0,0.1)'
  };

  const navLinks = (
    <nav style={{ display: isMobile ? 'none' : 'flex', gap: '1.5rem' }}>
      {navItems.map(item => (
        <Link
          key={item.path}
          to={item.path}
          style={{
            position: 'relative',
            padding: '0.25rem 0',
            color: !isHome || isScrolled ? (pathname === item.path ? '#2a7f62' : '#2A7E63') : '#fff',
            fontWeight: pathname === item.path ? 600 : 400,
            transition: 'color 0.2s'
          }}
          onClick={() => setMenuOpen(false)}
        >
          {item.label}
          {pathname === item.path && (
            <motion.span
              layoutId="nav-underline"
              style={{
                position: 'absolute',
                bottom: -4,
                left: 0,
                width: '100%',
                height: 3,
                backgroundColor: !isHome || isScrolled ? '#2a7f62' : '#fff',
                borderRadius: 2
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
        </Link>
      ))}
    </nav>
  );

// Menu Mobile --------------------------------
const mobileMenu = (
  <AnimatePresence>
    {menuOpen && (
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
        className="fixed top-[60px] right-0 z-[99] h-[calc(100vh-60px)] w-3/4 max-w-xs bg-white/80 backdrop-blur-lg shadow-xl px-6 py-8 flex flex-col justify-between"
      >
        <div className="space-y-6">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-3xl text-emerald-800 hover:text-emerald-600 transition py-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

      </motion.div>
    )}
  </AnimatePresence>
);


  return (
    <>
      <header style={headerStyle}>
        <div className="container" style={{
          width: '100%',
          maxWidth: '1200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: (!isHome || isScrolled || menuOpen) ? 'space-between' : (isMobile || !isMobile ? 'flex-end' : 'space-between'),
          padding: '0 1rem'
        }}>
          {(!isHome || isScrolled || menuOpen) && (
            <Link to="/" style={{ display: 'flex', alignItems: 'center', color: '#2A7E63' }}>
              <img src="/photos/logos/logo.png" alt="Schwander Fruits" style={{ height: isMobile ? 40 : 40, marginRight: '0.5rem' }} />
              {!isMobile && (
                <span style={{ fontSize: '1.5rem', fontWeight: 600, color: '#2A7E63' }}>Schwander Fruits</span>
              )}
            </Link>
          )}
          <div style={{ width: isMobile ? 40 : 200 }} />

          {navLinks}

          {isMobile && (
              <motion.button
                onClick={() => {
                  const newValue = !menuOpen;
                  setMenuOpen(newValue);
                  if (newValue) setShowHeader(true);
                }}
                initial={false}
                animate={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.25rem'
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {menuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.7, rotate: 10 }}
                      transition={{ duration: 0.3, ease: [0.4, 0.13, 0.23, 0.96] }}
                    >
                      <X size={28} color="#2A7E63" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, scale: 0.7, rotate: 20 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.7, rotate: -10 }}
                      transition={{ duration: 0.3, ease: [0.4, 0.13, 0.23, 0.96] }}
                    >
                      <Menu size={28} color={isHome && !isScrolled ? '#fff' : '#2A7E63'} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
          )}

        </div>
      </header>

      {isMobile && mobileMenu}
      {!isHome && <div style={{ height: isMobile ? '60px' : '80px' }} />}
    </>
  );
};

export default Header;
