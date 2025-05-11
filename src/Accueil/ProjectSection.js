import React from 'react';
import img1 from '../images/voltainos.png'
import img2 from '../images/uniride.png'
import img3 from '../images/enbo.png'
import { useNavigate } from 'react-router-dom';

const styles = {
  section: {
    padding: '4rem 5%',
    backgroundColor: '#fdf6ec',
    fontFamily: 'sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', 
    flexWrap: 'wrap',
    marginBottom: '1.5rem',
  },
  title: {
    fontSize: '2.5rem',
    color: '#222',
    margin: 0,
  },
  button: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: 'orange',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    whiteSpace: 'nowrap',
  },
  description: {
    fontSize: '1.1rem',
    color: '#444',
    lineHeight: '1.6',
    marginBottom: '2rem',
    maxWidth: '800px',
  },
  projectsGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '1.5rem',
    flexWrap: 'wrap',
    flexWrap: 'wrap',
    '@media (max-width: 768px)': {
      justifyContent: 'center', 
    },
  },
  projectBox: {
    width: '300px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '280px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '0.5rem',
  },
  projectTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '0.3rem',
  },
  projectText: {
    fontSize: '1rem',
    color: '#555',
  },
};

const ProjectSection = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate('./Projets');
  }
  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.title}>Nos projets</h2>
        <button
          style={styles.button} onClick={handleSubmit }
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        >
          Plus des détails
        </button>
      </div>

      <p style={styles.description}>
        Les 11 projets développés par plus de cinquante étudiants universitaires connectés au réseau Enactus FSBM.
        Découvrez quelques exemples de projets devenus des entreprises et d'autres notables :
      </p>

      <div style={styles.projectsGrid}>
        {[
          {
            img: img1,
            title: 'Voltainos',
            desc: 'VOLTAINOS : éolien et piézoélectricité pour une production durable.',
          },
          {
            img:img2,
            title: 'Uniride',
            desc: 'Covoiturage étudiant adaptatif pour une mobilité durable au Maroc.',
          },
          {
            img:img3,
            title: 'Enbo',
            desc: 'Boîtes recyclées à triple couche, traçabilité garantie.',
          },
        ].map((proj, i) => (
          <div key={i} style={styles.projectBox}>
            <img src={proj.img} alt={proj.title} style={styles.image} />
            <div style={styles.projectTitle}>{proj.title}</div>
            <div style={styles.projectText}>{proj.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;