import React from 'react';
import './PartnersSection.css';
import img1 from '../images/WhatsApp Image 2024-11-28 at 23.49.24.jpeg';
import img2 from '../images/WhatsApp Image 2024-11-28 at 23.49.52.jpeg';
import img3 from '../images/WhatsApp Image 2024-11-28 at 23.50.04.jpeg';
import img4 from '../images/WhatsApp Image 2024-11-28 at 23.50.12.jpeg';
import img5 from '../images/WhatsApp Image 2024-11-28 at 23.50.19.jpeg';
import img6 from '../images/WhatsApp Image 2024-11-28 at 23.50.37.jpeg';

const styles = {
  section: {
    display: 'flex',
    alignItems: 'center',
    padding: '4rem 5%',
    backgroundColor: '#fdf6ec',
    fontFamily: 'sans-serif',
  },
  leftSection: {
    flex: 1,
    textAlign: 'left',
    marginRight: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    color: '#222',
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: '1.2rem',
    color: '#444',
  },
  rightSection: {
    flex: 3,
    position: 'relative',
    overflow: 'hidden',
  },
};

const partners = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
];

const PartnersSection = () => {
  return (
    <section style={styles.section}>
      <div style={styles.leftSection}>
        <h2 style={styles.title}>Partenaires</h2>
        <p style={styles.description}>Découvrez qui sont les supporters d'Enactus FSBM :</p>
      </div>
      <div style={styles.rightSection}>
        <div className="partnersWrapper">
          {partners.map((partner, index) => (
            <div key={index} className="partnerBox">
              <img src={partner} alt={`Partner ${index + 1}`} className="partnerImage" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;