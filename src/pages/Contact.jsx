import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <main className="container" style={{ padding: '2rem 1rem' }}>
            <h2 style={{ color: '#3a6f4b' }}>Contactez-nous</h2>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                <div style={{ flex: '1 1 300px' }}>
                    <h3>Où nous trouver</h3>
                    <iframe
                        title="Plan Schwander Fruits"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.9739237406484!2d6.67783940584526!3d46.78511818959518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478dcfffc06a0b09%3A0x274bae1f90ce9689!2sSchwander-Fruits!5e0!3m2!1sfr!2sus!4v1748437388897!5m2!1sfr!2sus"
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: '8px' }}
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
                <form
                    action="mailto:contact@schwander-fruits.ch"
                    method="post"
                    encType="text/plain"
                    style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                    <h3>Envoyer un message</h3>
                    <a>Prénom et Nom</a>
                    <input
                        type="text"
                        name="name"
                        placeholder="Votre nom"
                        onChange={handleChange}
                        required
                        style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Votre email"
                        onChange={handleChange}
                        required
                        style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    <textarea
                        name="message"
                        placeholder="Votre message"
                        onChange={handleChange}
                        required
                        rows="5"
                        style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    <button
                        type="submit"
                        style={{
                            padding: '0.75rem',
                            backgroundColor: '#2a7f62',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Envoyer
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Contact;
