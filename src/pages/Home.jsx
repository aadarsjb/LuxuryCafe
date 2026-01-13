import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Award, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Section = ({ title, children, className = '' }) => (
  <section className={`section ${className}`}>
    <div className="container">
      {title && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-gold)', marginBottom: '1rem' }}>{title}</h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-brown-deep)', margin: '0 auto' }}></div>
        </motion.div>
      )}
      {children}
    </div>
  </section>
);

const Home = () => {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="hero">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Experience Coffee<br />Like Never Before</h1>
          <p>Artisanal brewing meets world-class education.</p>
          <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/menu" className="btn">View Menu</Link>
            <Link to="/course" className="btn btn-outline" style={{ color: 'var(--color-white)', borderColor: 'var(--color-white)' }}>Join Course</Link>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <Section title="Our Story">
        <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <motion.div
            style={{ flex: 1, minWidth: '300px' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <img
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Coffee interior"
              style={{ width: '100%', borderRadius: '4px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            />
          </motion.div>
          <motion.div
            style={{ flex: 1, minWidth: '300px' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>A Tradition of Excellence</h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Founded in 2010, Luxury Café began with a simple mission: to source the finest beans and brew them to perfection.
              Our passion evolved into teaching, sharing our secrets with aspiring baristas from around the globe.
            </p>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
              We believe coffee is more than a drink—it's a ritual, an art, and a connection.
            </p>
            <Link to="/about" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--color-gold)', fontWeight: 'bold' }}>
              Learn More <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Features */}
      <div style={{ backgroundColor: 'var(--color-white)', padding: '5rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', textAlign: 'center' }}>
          {[
            { icon: <Coffee size={40} />, title: 'Premium Beans', desc: 'Sourced from top estates.' },
            { icon: <Award size={40} />, title: 'Expert Training', desc: 'SCA certified instructors.' },
            { icon: <Users size={40} />, title: 'Community', desc: 'A hub for coffee lovers.' }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              style={{ maxWidth: '300px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>{feature.icon}</div>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{feature.title}</h4>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ padding: '5rem 0', backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
            style={{ marginBottom: '4rem' }}
          >
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-gold)', marginBottom: '1rem' }}>Testimonials</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-brown-deep)', margin: '0 auto' }}></div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { text: "The barista course completely changed my perspective on coffee. Highly recommended!", author: "Sarah J." },
              { text: "Hands down the best espresso in the city. The ambiance is unmatched.", author: "Michael R." },
              { text: "A true gem for coffee loers. The staff is incredibly knowledgeable.", author: "Emma W." }
            ].map((testimony, idx) => (
              <motion.div
                key={idx}
                style={{ padding: '2rem', backgroundColor: 'var(--color-white)', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '1.1rem' }}>"{testimony.text}"</p>
                <h5 style={{ fontWeight: 'bold', color: 'var(--color-gold)' }}>- {testimony.author}</h5>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
