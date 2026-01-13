import React from 'react';
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-brown-deep)', color: 'var(--color-cream)', padding: '4rem 0', marginTop: 'auto' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem', gap: '0.5rem' }}>
                    <Coffee size={32} color="var(--color-gold)" />
                    <h2 style={{ color: 'var(--color-gold)', margin: 0, fontSize: '1.8rem' }}>Luxury Café</h2>
                </div>

                <div className="socials" style={{ displayName: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                    <a href="#" style={{ color: 'var(--color-cream)' }}><Instagram size={24} /></a>
                    <a href="#" style={{ color: 'var(--color-cream)' }}><Facebook size={24} /></a>
                    <a href="#" style={{ color: 'var(--color-cream)' }}><Twitter size={24} /></a>
                </div>

                <div style={{ marginBottom: '2rem', color: 'var(--color-gold)' }}>
                    <p style={{ margin: '0.2rem 0' }}>Mon-Fri: 7am - 8pm</p>
                    <p style={{ margin: '0.2rem 0' }}>Sat-Sun: 8am - 9pm</p>
                </div>

                <div className="links" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                    <a href="/menu">Menu</a>
                    <a href="/course">Courses</a>
                    <a href="/gallery">Gallery</a>
                    <a href="/contact">Contact</a>
                </div>

                <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} Luxury Café & Barista School. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
