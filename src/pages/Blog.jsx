import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Tips', 'News', 'Updates'];

    const filteredPosts = selectedCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div style={{ backgroundColor: 'var(--color-brown-deep)', padding: '6rem 0', textAlign: 'center', color: 'var(--color-cream)' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Blog & News</h1>
                <p>Coffee tips, industry news, and school updates</p>
            </div>

            <div className="container section">
                {/* Category Filter */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            style={{
                                padding: '0.75rem 1.5rem',
                                border: selectedCategory === category ? '2px solid var(--color-gold)' : '2px solid #ddd',
                                backgroundColor: selectedCategory === category ? 'var(--color-gold)' : 'white',
                                color: selectedCategory === category ? 'white' : 'var(--color-brown-deep)',
                                borderRadius: '25px',
                                cursor: 'pointer',
                                fontWeight: selectedCategory === category ? 'bold' : 'normal',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Posts Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
                    {filteredPosts.map((post, idx) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer'
                            }}
                            whileHover={{ transform: 'translateY(-5px)', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}
                        >
                            <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                />
                                <div style={{ padding: '1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', fontSize: '0.9rem', color: '#666' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                            <Tag size={14} color="var(--color-gold)" />
                                            {post.category}
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                            <Clock size={14} />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-brown-deep)' }}>
                                        {post.title}
                                    </h2>

                                    <p style={{ color: '#555', marginBottom: '1rem', lineHeight: '1.6' }}>
                                        {post.excerpt}
                                    </p>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', color: '#888' }}>
                                        <span>{post.author}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                            <Calendar size={14} />
                                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '4rem', color: '#888' }}>
                        <p style={{ fontSize: '1.2rem' }}>No posts found in this category.</p>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Blog;
