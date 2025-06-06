import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Animation douce jusqu'en haut
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return null;
}
