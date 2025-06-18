// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Home = () => (

  <main style={{ position: 'relative', margin: 0, padding: 0 }}>
    {/* Hero Section Fullscreen */}
    <section
      style={{
        height: '100vh',
        width: '100%',
        backgroundImage: 'url(/photos/home/hero_cinema.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      <h1 className="responsive-title" style={{ margin: 0, lineHeight: 1.2 }}>
        <b>Bienvenue chez Schwander Fruits</b>
      </h1>
      <p style={{ fontSize: '1.25rem', margin: '1rem 0', maxWidth: '600px', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
        Découvrez nos fruits et légumes frais, cultivés avec passion.
        Vente directe au marché et à la ferme.
      </p>
      <Link to="/products">
        <button className='bg-green-600 transition duration-300 hover:bg-white hover:text-green-700'
          style={{
            padding: '0.75rem 1.5rem',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1.125rem',
            boxShadow: '2px 2px 6px rgba(0,0,0,0.3)'
          }}
        >
          Découvrir
        </button>
      </Link>
    </section>

    {/* À propos de la ferme */}
    <section style={{ padding: '4rem 1rem', backgroundColor: '#fff' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: '#3a6f4b', marginBottom: '1.5rem', textAlign: 'center' }}>À propos de notre ferme</h2>
        <p style={{ color: '#555', lineHeight: 1.8 }}>
          La vente directe a commencé avec nos parents en 1974 puis nous avons commencé à faire les marchés d'Yverdon.
          Nous sommes agriculteurs et nous avons un grand verger et de grandes cultures. Nous produisons divers fruits et, comme grandes cultures,
          nous cultivons du colza, diverses céréales ainsi que des pommes de terre.
        </p>
        <p style={{ color: '#555', lineHeight: 1.8, marginTop: '1rem' }}>
          Au début, nous avons commencé avec les cerises puis le choix s'est agrandi avec divers sortes de fruits.
          Maintenant, au fur et à mesure des saisons, nous vous proposons : rhubarbe, cerises, abricots, pêches, framboises,
          prunes, pruneaux ainsi que des pommes d'été, d'automne, de garde, et des poires.
        </p>
      </div>
    </section>

    {/* Features Section */}
    <section style={{ padding: '4rem 1rem', backgroundColor: '#f2f8f5' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {[
          { title: 'Qualité garantie', icon: '🍎' },
          { title: 'Culture locale', icon: '🌱' },
          { title: 'Direct producteur', icon: '🚜' }
        ].map((feat, idx) => (
          <div
            key={idx}
            style={{
              flex: '1 1 250px',
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{feat.icon}</div>
            <h3 style={{ margin: 0, color: '#3a6f4b', fontSize: '1.25rem' }}>{feat.title}</h3>
          </div>
        ))}
      </div>
    </section>

    {/* Call to Action */}
    <section style={{ padding: '4rem 1rem', backgroundColor: '#fff', textAlign: 'center' }}>
      <h2 style={{ color: '#2a7f62', marginBottom: '1rem' }}>Rejoignez-nous au marché ce samedi !</h2>
      <p style={{ color: '#555', marginBottom: '2rem' }}>
        Retrouvez-nous chaque samedi de 8h à 12h au marché du village pour déguster nos produits de saison.
      </p>
      <Link to="/contact">
        <button style={{
          padding: '1rem 2rem',
          backgroundColor: '#2a7f62',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1.125rem',
          boxShadow: '2px 2px 6px rgba(0,0,0,0.2)'
        }}>
          Nous contacter
        </button>
      </Link>
    </section>

    {/* Testimonials Section */}
    <section style={{ padding: '4rem 1rem', backgroundColor: '#f2f8f5' }}>
      <h2 style={{ color: '#3a6f4b', textAlign: 'center', marginBottom: '2rem' }}>Ils nous font confiance</h2>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {[
          { text: 'Le top du maraîcher de la région yverdonnoise !', author: 'Luca E.' },
          { text: 'Des fruits de saisons délicieux !', author: 'Cirino M.' },
          { text: 'Chaleureux accueil, large choix de bons fruits et légumes du terroir', author: 'Sebastien G.' }
        ].map((t, idx) => (
          <div
            key={idx}
            style={{
              flex: '1 1 300px',
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
          >
            <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '1rem' }}>&quot;{t.text}&quot;</p>
            <p style={{ textAlign: 'right', fontWeight: 600, color: '#333' }}>— {t.author}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Newsletter Section */}
    <section style={{ padding: '4rem 1rem', backgroundColor: '#fff', textAlign: 'center' }}>
      <h2 style={{ color: '#2a7f62', marginBottom: '1rem' }}>Restez informés</h2>
      <p style={{ color: '#555', marginBottom: '1.5rem' }}>Inscrivez-vous à notre newsletter pour recevoir les dernières offres et actualités.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <input
          type="email"
          placeholder="Votre email"
          style={{ padding: '0.75rem', borderRadius: '4px 0 0 4px', border: '1px solid #ccc', width: '300px' }}
        />
        <button style={{ padding: '0.75rem 1.5rem', backgroundColor: '#2a7f62', color: '#fff', border: 'none', borderRadius: '0 4px 4px 0', cursor: 'pointer', fontSize: '1rem' }}>
          S'inscrire
        </button>
      </div>
    </section>
  </main>
);

export default Home;
