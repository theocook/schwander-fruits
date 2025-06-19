// src/components/Header.jsx
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
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

  const mobileMenu = (
    <div style={{
      position: 'fixed',
      top: menuOpen ? (isMobile ? '60px' : '80px') : '-100%',
      left: 0,
      width: '100%',
      height: `calc(100vh - ${isMobile ? '60px' : '80px'})`,
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '20px',
      transition: 'top 0.3s ease-in-expo',
      zIndex: 99
    }}>
      {navItems.map(item => (
        <Link
          key={item.path}
          to={item.path}
          style={{ margin: '1rem 0', fontSize: '1.25rem', color: '#2A7E63', textDecoration: 'none' }}
          onClick={() => setMenuOpen(false)}
        >
          {item.label}
        </Link>
      ))}
    </div>
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
            <button
              onClick={() => {
                const newValue = !menuOpen;
                setMenuOpen(newValue);
                if (newValue) setShowHeader(true);
              }}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {menuOpen ? (
                <X size={24} color={isHome && !isScrolled ? '#2A7E63' : '#2A7E63'} />
              ) : (
                <Menu size={24} color={isHome && !isScrolled ? '#fff' : '#2A7E63'} />
              )}
            </button>
          )}
        </div>
      </header>

      {isMobile && mobileMenu}
      {!isHome && <div style={{ height: isMobile ? '60px' : '80px' }} />}
    </>
  );
};

export default Header;
