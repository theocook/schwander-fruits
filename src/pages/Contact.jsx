import React, { useState } from 'react';
import '../index.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 scroll-smooth">
            <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-700 to-emerald-800">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center"></div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Contactez-nous
            </h1>
                        
                    </div>
                    <div className="absolute bottom-0 left-0 right-0">
                            <svg viewBox="0 0 1400 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 120L1440 120L1440 0C1200 40 800 80 0 40V120Z" fill="rgb(249 250 251)"/>
                            </svg>
                        </div>
                </div>
        <div className="container -mt-6" style={{ padding: '2rem 1rem' }}>
            
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                <div style={{ flex: '1 1 300px' }}>
                    <h3 className='text-green-700 font-bold'>Où nous trouver</h3>
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
                    <h3 className='text-green-700 font-bold'>Envoyer un message</h3>
                    <label>
                        <span class="text-gray-700 after:ml-0.5 after:text-red-500">Nom</span>
                        <input
                            type="text"
                            name="name"
                            placeholder="Votre nom"
                            onChange={handleChange}
                            required
                            style={{ padding: '0.5rem', borderRadius: '4px'}}
                            className='w-full px-4 py-2 rounded-lg 
                                    focus:outline-none 
                                    focus:ring-2 focus:ring-green-600 
                                    focus:border-green-600 
                                    caret-green-600 
                                    transition'
                        />
                    </label>
                    <label>
                        <span class="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">Email</span>
                        <input
                            type="email"
                            name="email"
                            placeholder="votre@email.com"
                            onChange={handleChange}
                            required
                            style={{ padding: '0.5rem', borderRadius: '4px'}}
                            className='w-full px-4 py-2 rounded-lg 
                                    focus:outline-none 
                                    focus:ring-2 focus:ring-green-600 
                                    focus:border-green-600 
                                    caret-green-600 
                                    transition'
                        />
                    </label>
                    <label>
                    <span class="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">Votre message</span>
                    <textarea
                        name="message"
                        placeholder="Bonjour, je voudrais bien savoir si ..."
                        onChange={handleChange}
                        required
                        rows="5"
                        style={{ padding: '0.5rem', borderRadius: '4px'}}
                        class='w-full px-4 py-2 rounded-lg 
                                focus:outline-none 
                                focus:ring-2 focus:ring-green-600 
                                focus:border-green-600 
                                caret-green-600 
                                transition'
                    />
                    </label>
                    <button
                        type="submit"
                        style={{
                            cursor: 'pointer'
                        }}
                        className='text-white bg-green-600 transition-colors duration-500 ease-in-out hover:bg-white hover:text-green-700 hover:border-double hover:border-4 hover:border-green-700 rounded-full py-3 px-6 border-4 border-transparent'
                    >
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Contact;
