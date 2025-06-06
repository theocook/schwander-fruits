// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Contact from './pages/Contact';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    <ScrollToTop />
  </>
);
export default App;