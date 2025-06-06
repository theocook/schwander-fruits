// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone } from 'lucide-react';

const Footer = () => (
  <footer style={{ backgroundColor: '#f9f9f9', borderTop: '1px solid #eee' }}>
    <div
      className="container"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '1.5rem 1rem'
      }}
    >
      {/* Horaires */}
      <div style={{ flex: '1 1 200px', margin: '0.5rem' }}>
        <h4 style={{ marginBottom: '0.75rem', color: '#2a7f62' }}>Horaires</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#333', lineHeight: 1.8 }}>
          <li>
            <strong>Lundi :</strong> 10:00–18:30
          </li>
          <li>
            <strong>Mardi :</strong> 14:00–18:30
          </li>
          <li>
            <strong>Mercredi :</strong> 08:00–18:30
          </li>
          <li>
            <strong>Jeudi :</strong> 08:00–18:30
          </li>
          <li>
            <strong>Vendredi :</strong> 08:00–18:30
          </li>
          <li>
            <strong>Samedi :</strong> 14:00–17:30
          </li>
          <li>
            <strong>Dimanche :</strong> 9:30–17:00
          </li>
        </ul>
      </div>

      {/* Adresse */}
      <div style={{ flex: '1 1 200px', margin: '0.5rem' }}>
        <h4 style={{ marginBottom: '0.75rem', color: '#2a7f62' }}>Où nous trouver</h4>
        <p style={{ margin: '0.25rem 0', color: '#333' }}>Schwander Fruits</p>
        <p style={{ margin: '0.25rem 0', color: '#333' }}>Rte de Cheseaux 12</p>
        <p style={{ margin: '0.25rem 0', color: '#333' }}>1400 Cheseaux-Noréaz</p>
        <a
          href="tel:+41787643005"
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#2a7f62',
            textDecoration: 'none',
            marginTop: '0.5rem'
          }}
        >
          <Phone size={20} style={{ marginRight: '0.5rem' }} />
          +41 78 764 30 05
        </a>
        <a
          href="tel:+41244260791"
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#2a7f62',
            textDecoration: 'none',
            marginTop: '0.5rem'
          }}
        >
          <Phone size={20} style={{ marginRight: '0.5rem' }} />
          +41 24 426 07 91
        </a>
      </div>

      {/* Menu */}
      <div style={{ flex: '1 1 200px', margin: '0.5rem' }}>
        <h4 style={{ marginBottom: '0.75rem', color: '#2a7f62' }}>Menu</h4>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link to="/" style={{ color: '#555', textDecoration: 'none' }}>
            Accueil
          </Link>
          <Link to="/products" style={{ color: '#555', textDecoration: 'none' }}>
            Produits
          </Link>
          <Link to="/about" style={{ color: '#555', textDecoration: 'none' }}>
            À propos
          </Link>
          <Link to="/contact" style={{ color: '#555', textDecoration: 'none' }}>
            Contact
          </Link>
        </nav>
      </div>
    </div>

    {/* Bas de page : copyright et réseaux */}
    <div
      className="container"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 1rem',
        borderTop: '1px solid #eee',
        flexWrap: 'wrap'
      }}
    >
      <p style={{ margin: 0, color: '#666' }}>
        © {new Date().getFullYear()} Schwander Fruits. Tous droits réservés.
      </p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
        <a
          href="hhttps://www.facebook.com/profile.php?id=100009118014778"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#2a7f62' }}
        >
          <Facebook size={20} />
        </a>
        <a
          href="https://www.instagram.com/schwanderfruits/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#2a7f62' }}
        >
          <Instagram size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
