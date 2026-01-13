import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // EmailJS configuration
        const serviceID = 'ID'; // Replace with your EmailJS service ID
        const templateID = 'ID'; // Replace with your EmailJS template ID
        const publicKey = 'ID'; // Replace with your EmailJS public key

        // Prepare email parameters
        const emailParams = {
            to_name: 'Luxury Café Admin',
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };

        // Send email
        emailjs.send(serviceID, templateID, emailParams, publicKey)
            .then((response) => {
                console.log('Contact message sent successfully!', response.status, response.text);
                alert('Thank you for your message! We will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
                setIsSubmitting(false);
            })
            .catch((error) => {
                console.error('Failed to send message:', error);
                alert('Failed to send message. Please try again.');
                setIsSubmitting(false);
            });
    };

    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div style={{ backgroundColor: 'var(--color-brown-deep)', padding: '6rem 0', textAlign: 'center', color: 'var(--color-cream)' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Contact Us</h1>
                <p>Visit us or get in touch for inquiries.</p>
            </div>

            <div className="container section">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>

                    {/* Info Side */}
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-gold)' }}>Get In Touch</h2>

                        <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ backgroundColor: 'var(--color-cream)', padding: '1rem', borderRadius: '50%' }}>
                                <MapPin color="var(--color-brown-deep)" />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem' }}>Location</h4>
                                <p>123 Coffee Lane, Brew City, BC 12345</p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ backgroundColor: 'var(--color-cream)', padding: '1rem', borderRadius: '50%' }}>
                                <Phone color="var(--color-brown-deep)" />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem' }}>Phone</h4>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ backgroundColor: 'var(--color-cream)', padding: '1rem', borderRadius: '50%' }}>
                                <Mail color="var(--color-brown-deep)" />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem' }}>Email</h4>
                                <p>hello@luxurycafe.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <motion.div
                        style={{ flex: 1, minWidth: '300px' }}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <input
                                required
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                placeholder="Your Name"
                                style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
                            />
                            <input
                                required
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                placeholder="Your Email"
                                style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
                            />
                            <textarea
                                required
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Message"
                                style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem', fontFamily: 'inherit' }}
                            ></textarea>
                            <button
                                type="submit"
                                className="btn"
                                style={{ border: 'none' }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
