import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const MenuCategory = ({ title, items }) => (
    <div style={{ marginBottom: '4rem' }}>
        <h3 style={{
            fontSize: '2rem',
            marginBottom: '2rem',
            color: 'var(--color-brown-deep)',
            borderBottom: '2px solid var(--color-gold)',
            display: 'inline-block',
            paddingBottom: '0.5rem'
        }}>
            {title}
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid #e0e0e0', paddingBottom: '1rem' }}
                >
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{item.name}</h4>
                        <p style={{ fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>{item.desc}</p>
                    </div>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-gold)' }}>{item.price}</span>
                </motion.div>
            ))}
        </div>
    </div>
);

const Menu = () => {
    const coffeeItems = [
        { name: 'Espresso', desc: 'Rich, full-bodied single shot', price: '$4' },
        { name: 'Cappuccino', desc: 'Espresso with steamed milk foam', price: '$5' },
        { name: 'Latte', desc: 'Silky steamed milk with espresso', price: '$5.50' },
        { name: 'Pour Over', desc: 'Hand-brewed seasonal single origin', price: '$6' },
    ];

    const pastryItems = [
        { name: 'Croissant', desc: 'Buttery, flaky, french style', price: '$4.50' },
        { name: 'Opera Cake', desc: 'Almond sponge, coffee syrup, ganache', price: '$8' },
        { name: 'Scones', desc: 'Served with jam and clotted cream', price: '$5' },
    ];

    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div style={{ backgroundColor: 'var(--color-brown-deep)', padding: '6rem 0', textAlign: 'center', color: 'var(--color-cream)' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Our Menu</h1>
                <p>Curated for the refined palate.</p>
            </div>

            <div className="container section">
                <div style={{ backgroundColor: 'var(--color-cream)', padding: '2rem', borderRadius: '8px', marginBottom: '4rem', border: '1px solid var(--color-gold)' }}>
                    <div className="text-center" style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-brown-deep)' }}>Seasonal Specials</h2>
                        <Star size={24} color="var(--color-gold)" style={{ marginTop: '0.5rem' }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { name: 'Pumpkin Spice Cold Brew', desc: 'House-made spice blend, maple foam', price: '$6.50' },
                            { name: 'Toasted Hazelnut Latte', desc: 'Praline crumb, oat milk', price: '$6' }
                        ].map((item, index) => (
                            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #ccc', paddingBottom: '0.5rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem' }}>{item.name}</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#555' }}>{item.desc}</p>
                                </div>
                                <span style={{ fontWeight: 'bold' }}>{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <MenuCategory title="Signature Coffee" items={coffeeItems} />
                <MenuCategory title="Reserve Details (Single Origin)" items={[
                    { name: 'Panama Geisha', desc: 'Jasmine, bergamot, silky body. Origin: Esmeralda Estate.', price: '$12' },
                    { name: 'Ethiopian Yirgacheffe', desc: 'Blueberry, lavender, bright acidity. Origin: Kochere.', price: '$8' }
                ]} />
                <MenuCategory title="Artisanal Pastries" items={pastryItems} />
            </div>
        </motion.div>
    );
};

export default Menu;
