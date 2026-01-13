import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Reserve = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        requests: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // EmailJS configuration
        const serviceID = 'service_k44r8bx';
        const templateID = 'template_nq82wtr'; // You may want to create a separate template for reservations
        const publicKey = 'EiH4Cq6dX0iW0al1u';

        // Prepare email parameters
        const emailParams = {
            to_name: 'Luxury Café Admin',
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            date: formData.date,
            time: formData.time,
            guests: formData.guests,
            message: `Table Reservation Request\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\nSpecial Requests: ${formData.requests || 'None'}`,
        };

        // Send email
        emailjs.send(serviceID, templateID, emailParams, publicKey)
            .then((response) => {
                console.log('Reservation email sent successfully!', response.status, response.text);
                setIsSubmitted(true);
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            })
            .catch((error) => {
                console.error('Failed to send reservation:', error);
                alert('Failed to submit reservation. Please try again.');
                setIsSubmitting(false);
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
                    <h1 style={{ color: 'var(--color-brown-deep)', marginBottom: '1rem' }}>Reservation Received!</h1>
                    <p style={{ fontSize: '1.2rem' }}>Thank you, {formData.name}. We'll confirm your table shortly.</p>
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
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Reserve a Table</h1>
                <p>Book your spot at Luxury Café</p>
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

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                    <Calendar size={18} /> Date
                                </label>
                                <input
                                    required
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    type="date"
                                    min={new Date().toISOString().split('T')[0]}
                                    style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                    <Clock size={18} /> Time
                                </label>
                                <input
                                    required
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    type="time"
                                    style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                                />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                <Users size={18} /> Number of Guests
                            </label>
                            <select
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: 'white' }}
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                ))}
                                <option value="9+">9+ Guests (Call Us)</option>
                            </select>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Special Requests (Optional)</label>
                            <textarea
                                name="requests"
                                value={formData.requests}
                                onChange={handleChange}
                                rows="3"
                                placeholder="Dietary restrictions, occasion, seating preferences..."
                                style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit' }}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn"
                            style={{ border: 'none', marginTop: '1rem' }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Reserve Table'}
                        </button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Reserve;
