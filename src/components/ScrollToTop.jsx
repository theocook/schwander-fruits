// src/components/ScrollToTop.jsx
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
        visible && (
            <button onClick={scrollUp} style={{ position: 'fixed', bottom: 20, right: 20, width: 40, height: 40, backgroundColor: '#2a7f62', border: 'none', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}>
                <ArrowUp color="#fff" size={20} />
            </button>
        )
    );
};
export default ScrollToTop;