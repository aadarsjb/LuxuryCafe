import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Enroll = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const initialCourse = location.state?.courseName || '';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: initialCourse,
        date: '',
        experience: 'beginner',
        comments: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (initialCourse) {
            setFormData(prev => ({ ...prev, course: initialCourse }));
        }
    }, [initialCourse]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS configuration
        const serviceID = 'ID'; // Replace with your EmailJS service ID
        const templateID = 'ID'; // Replace with your EmailJS template ID
        const publicKey = 'ID'; // Replace with your EmailJS public key

        // Prepare email parameters
        const emailParams = {
            to_name: 'Luxury Café Admin',
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            course: formData.course,
            experience: formData.experience,
            message: `New course enrollment from ${formData.name}`,
        };

        // Send email
        emailjs.send(serviceID, templateID, emailParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                setIsSubmitted(true);
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                alert('Failed to submit enrollment. Please try again.');
            });
    };

    if (isSubmitted) {
        return (
            <div className="page-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh', textAlign: 'center' }}>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                >
                    <CheckCircle size={80} color="var(--color-gold)" style={{ margin: '0 auto 2rem' }} />
                    <h1 style={{ color: 'var(--color-brown-deep)', marginBottom: '1rem' }}>Application Received!</h1>
                    <p style={{ fontSize: '1.2rem' }}>Thank you, {formData.name}. We will contact you shortly.</p>
                </motion.div>
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
            <div style={{ backgroundColor: 'var(--color-brown-deep)', padding: '6rem 0', textAlign: 'center', color: 'var(--color-cream)' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Enroll Now</h1>
                <p>Begin your journey to coffee mastery.</p>
            </div>

            <div className="container section">
                <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'var(--color-white)', padding: '2rem', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Full Name</label>
                            <input
                                required
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email Address</label>
                            <input
                                required
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Phone Number</label>
                            <input
                                required
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                type="tel"
                                style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Selected Course</label>
                            <select
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: 'white' }}
                            >
                                <option value="">Select a course...</option>
                                <option value="Barista Fundamentals">Barista Fundamentals</option>
                                <option value="Latte Art Mastery">Latte Art Mastery</option>
                                <option value="Sensory Skills">Sensory Skills</option>
                            </select>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Experience Level</label>
                            <select
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: 'white' }}
                            >
                                <option value="beginner">Beginner (No experience)</option>
                                <option value="intermediate">Intermediate (Home brewer)</option>
                                <option value="advanced">Advanced (Working professional)</option>
                            </select>
                        </div>

                        <button className="btn" style={{ border: 'none', marginTop: '1rem' }}>Submit Application</button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Enroll;
