import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import { getPostBySlug } from '../data/blogPosts';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = getPostBySlug(slug);

    if (!post) {
        return (
            <div className="page-container" style={{ textAlign: 'center', padding: '4rem' }}>
                <h1>Post Not Found</h1>
                <Link to="/blog" style={{ color: 'var(--color-gold)' }}>← Back to Blog</Link>
            </div>
        );
    }

    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Header Image */}
            <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
                <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))'
                }} />
            </div>

            {/* Content */}
            <div className="container" style={{ maxWidth: '800px', margin: '-80px auto 0', position: 'relative' }}>
                <article style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                    {/* Metadata */}
                    <div style={{ marginBottom: '2rem' }}>
                        <button
                            onClick={() => navigate('/blog')}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                background: 'none',
                                border: 'none',
                                color: 'var(--color-gold)',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                marginBottom: '1rem'
                            }}
                        >
                            <ArrowLeft size={16} /> Back to Blog
                        </button>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem', fontSize: '0.9rem', color: '#666' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <Tag size={14} color="var(--color-gold)" />
                                {post.category}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <Clock size={14} />
                                {post.readTime}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <Calendar size={14} />
                                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                        </div>

                        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--color-brown-deep)', lineHeight: '1.2' }}>
                            {post.title}
                        </h1>

                        <p style={{ color: '#888', fontSize: '0.95rem' }}>By {post.author}</p>
                    </div>

                    {/* Content */}
                    <div
                        style={{
                            lineHeight: '1.8',
                            color: '#333',
                            fontSize: '1.05rem'
                        }}
                        dangerouslySetInnerHTML={{
                            __html: post.content
                                .replace(/^#\s+/gm, '<h1 style="font-size: 2rem; margin: 2rem 0 1rem; color: var(--color-brown-deep);">')
                                .replace(/\n/g, '')
                                .replace(/##\s+/g, '</h1><h2 style="font-size: 1.5rem; margin: 1.5rem 0 1rem; color: var(--color-brown-deep);">')
                                .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                                .replace(/- /g, '<li style="margin: 0.5rem 0;">')
                                .replace(/<li/g, '<ul style="margin: 1rem 0; padding-left: 2rem;"><li')
                                .replace(/✅/g, '<span style="color: green;">✅</span>')
                                .replace(/❌/g, '<span style="color: red;">❌</span>')
                                + '</h2></ul>'
                        }}
                    />
                </article>

                {/* CTA Section */}
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                    <h3 style={{ marginBottom: '1rem', color: 'var(--color-brown-deep)' }}>Want to learn more?</h3>
                    <Link to="/course">
                        <button className="btn">Explore Our Courses</button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default BlogPost;
