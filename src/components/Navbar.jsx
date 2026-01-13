import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Coffee } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'Course', path: '/course' },
        { name: 'Reserve', path: '/reserve' },
        { name: 'Blog', path: '/blog' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="navbar" style={{ padding: '1.5rem 2rem', backgroundColor: 'var(--color-cream)', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-brown-deep)', fontWeight: '700' }}>
                    <Coffee size={28} color="var(--color-gold)" />
                    <span>Luxury Café</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                style={({ isActive }) => ({
                                    color: isActive ? 'var(--color-gold)' : 'var(--color-brown-deep)',
                                    fontWeight: isActive ? 700 : 400,
                                    fontSize: '1rem',
                                    letterSpacing: '0.5px'
                                })}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={toggleMenu} style={{ cursor: 'pointer', display: 'none' }}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    className="mobile-menu-overlay"
                    style={{
                        position: 'fixed',
                        top: '80px', // Adjust based on navbar height
                        left: 0,
                        width: '100%',
                        backgroundColor: 'var(--color-cream)',
                        padding: '2rem',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        zIndex: 999
                    }}
                >
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    style={{ fontSize: '1.5rem', color: 'var(--color-brown-deep)', fontFamily: 'var(--font-heading)' }}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
