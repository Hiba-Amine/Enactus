import React from 'react';
import heroImage from '../images/Compétition Demi Final.JPG';
import backgroundImage from '../images/149441939_01784fb2-e758-4ed7-ad0b-1bd195549471.jpg';
import { useNavigate } from 'react-router-dom';
function HeroSection() {
  const navigate = useNavigate();
  return (
    <section
      style={{
        ...styles.section,
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div style={styles.overlay}>
        <div style={styles.text}>
          <h1 style={styles.title}>
            <span style={styles.highlight}>ENACTUS</span> FSBM
          </h1>
          <h2>
            <span style={styles.highlight}>EN</span>trepreneuriat - <span style={styles.highlight}>A</span>ction - <span style={styles.highlight}>US</span>
          </h2>
          <p style={styles.description}>
            Notre club est bien plus qu’un simple regroupement d’étudiants : c’est une communauté dynamique, ambitieuse et engagée à transformer ses idées en actions concrètes pour un avenir meilleur.
          </p>
          <p style={styles.welcome}>Bienvenue sur le site officiel de notre club !</p>
          <button style={styles.button}           onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')} onClick={() => navigate('/AvoirPlus')}>AVOIR PLUS</button>
        </div>
        <div style={styles.imageContainer}>
          <img src={heroImage} alt="illustration" style={styles.image} />
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    backgroundSize: '80%',
    backgroundPosition: 'center top',
  },
  overlay: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: '40px',
    borderRadius: '20px',
  },
  text: {
    flex: 1,
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    lineHeight: '1.2',
  },
  highlight: {
    color: 'orange',
  },
  description: {
    fontSize: '18px',
    marginTop: '20px',
  },
  welcome: {
    fontSize: '16px',
    marginTop: '10px',
  },
  button: {
    marginTop: '30px',
    backgroundColor: 'orange',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  imageContainer: {
    flex: 1,
    textAlign: 'center',
  },
  image: {
    maxWidth: '80%',
    height: 'auto',
    borderRadius: '5%',
    border: 'solid orange',
  },
};
export default HeroSection;
