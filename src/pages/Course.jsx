import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const courses = [
    {
        title: 'Barista Fundamentals',
        level: 'Beginner',
        duration: '2 Days',
        price: '$300',
        description: 'Learn the history of coffee, espresso extraction, and milk texturing basics.',
        features: ['Espresso 101', 'Milk Chemistry', 'Machine Maintenance']
    },
    {
        title: 'Latte Art Mastery',
        level: 'Intermediate',
        duration: '1 Day',
        price: '$200',
        description: 'Perfect your pour. Learn hearts, rosettas, and tulips from champions.',
        features: ['Pouring mechanics', 'Contrast & Symmetry', 'Free Pour vs Etching']
    },
    {
        title: 'Sensory Skills',
        level: 'Advanced',
        duration: '3 Days',
        price: '$450',
        description: 'Develop your palate. Cupping protocols and flavor identification.',
        features: ['Olfactory training', 'Acidity & Body', 'SCA Cupping Form']
    }
];

const Course = () => {
    const navigate = useNavigate();
    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div style={{ backgroundColor: 'var(--color-brown-deep)', padding: '6rem 0', textAlign: 'center', color: 'var(--color-cream)' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Barista Academy</h1>
                <p>Elevate your craft from hobby to profession.</p>
            </div>

            <div className="container section">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {courses.map((course, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2, duration: 0.5 }}
                            style={{
                                border: '1px solid #ddd',
                                padding: '2rem',
                                borderRadius: '8px',
                                backgroundColor: 'var(--color-white)',
                                transition: 'transform 0.3s ease',
                                cursor: 'default'
                            }}
                            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: '#666', fontSize: '0.9rem' }}>
                                <span>{course.level}</span>
                                <span>{course.duration}</span>
                            </div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-brown-deep)' }}>{course.title}</h3>
                            <p style={{ marginBottom: '1.5rem', color: '#555' }}>{course.description}</p>
                            <ul style={{ marginBottom: '2rem' }}>
                                {course.features.map((feature, fIdx) => (
                                    <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                        <Check size={16} color="var(--color-gold)" /> {feature}
                                    </li>
                                ))}
                            </ul>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-gold)' }}>{course.price}</span>
                                <button className="btn" onClick={() => navigate('/enroll', { state: { courseName: course.title } })}>Enroll Now</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Instructors */}
            <div style={{ backgroundColor: 'var(--color-cream)', padding: '5rem 0' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-brown-deep)', marginBottom: '1rem' }}>Meet the Experts</h2>
                        <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-gold)', margin: '0 auto' }}></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                        {[
                            { name: 'David Chen', role: 'Head of Coffee', bio: '2020 World Barista Finalist. 10+ years experience.' },
                            { name: 'Maria Rodriguez', role: 'Latte Art Trainer', bio: 'National Latte Art Champion. Expert in milk chemistry.' }
                        ].map((instructor, idx) => (
                            <div key={idx} style={{ textAlign: 'center', maxWidth: '300px' }}>
                                <div style={{ width: '150px', height: '150px', borderRadius: '50%', backgroundColor: '#ddd', margin: '0 auto 1.5rem', overflow: 'hidden' }}>
                                    <img src={`https://images.unsplash.com/photo-${idx === 0 ? '1507003211169-0a1dd7228f2d' : '1438761681033-6461ffad8d80'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80`} alt={instructor.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{instructor.name}</h4>
                                <p style={{ color: 'var(--color-gold)', fontWeight: 'bold', marginBottom: '1rem' }}>{instructor.role}</p>
                                <p>{instructor.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="container section">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Frequently Asked Questions</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {[
                        { q: 'Do I need prior experience?', a: 'Barista Fundamentals is designed for complete beginners.' },
                        { q: 'Is certification provided?', a: 'Yes, all graduates receive a Certificate of Completion recognized by local cafes.' },
                        { q: 'What is the refund policy?', a: 'Full refunds are available up to 7 days before the course start date.' }
                    ].map((faq, idx) => (
                        <div key={idx} style={{ marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-brown-deep)' }}>{faq.q}</h4>
                            <p style={{ color: '#555' }}>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Course;
