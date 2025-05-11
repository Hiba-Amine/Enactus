
import React from 'react';
import imageProjet from '../images/Compétition.JPG';

const FirstSection = () => {
  return (
    <section style={{ ...styles.banner, backgroundImage: `url(${imageProjet})` }}>
      <div style={styles.yellowBox}>
        <h1 style={styles.title}>Notre équipe</h1>
        <p style={styles.paragraph}>
        Chez Enactus, notre équipe est composée de passionnés déterminés à innover et à faire une différence dans notre société grâce à l'entrepreneuriat social.
        </p>
      </div>
    </section>
  );
};

const styles = {
  banner: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '460px',
    paddingLeft: '5%',
    color: '#fff',
  },
  yellowBox: {
    backgroundColor: 'rgba(255, 204, 0, 0.85)', // ➕ Plus transparent
    padding: '40px',
    maxWidth: '700px',
    clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)',
    boxShadow: '4px 8px 20px rgba(0,0,0,0.2)',
  },
  title: {
    fontSize: '48px',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#111827',
    lineHeight: '1.2',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#333',
  },
};

export default FirstSection;