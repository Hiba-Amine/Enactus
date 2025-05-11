import React from "react";
import img from "../images/Comp-D.Final-Prix.JPG";
import { useNavigate } from 'react-router-dom';
export default function AboutSection(){
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate('./Equipe');
  };
    return(
        <section className="about" style={styles.about}>
        <div className="about-container" style={styles.aboutContainer}>
            <div className="about-image" style={styles.aboutImage}>
                <img src={img} style={styles.aboutImageImg}/>
            </div>
            <div className="about-content" style={styles.aboutContent}>
                <h2 style={styles.aboutContentH2}>Notre mission</h2>
                <p style={styles.aboutContentP}>
                 Enactus fsbm a pour mission de mobiliser les étudiants pour devenir des leaders engagés en réalisant des projets innovants qui offrent des solutions durables aux défis sociaux et environnementaux.
                </p>
                <button
            style={styles.ctaButton} onClick={handleSubmit }
            onMouseEnter={(e) => (e.target.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.target.style.opacity = '1')}
          >
            Rejoignez nous
          </button>
            </div>
        </div>
    </section> 
    );
}
const styles ={
    about: {
        padding: '5rem 5%',
        backgroundColor: '#fdf6ec',
      },
      aboutContainer: {
        display: 'flex',
        maxWidth: '1400px',
        margin: '0 auto',
        gap: '4rem',
        alignItems: 'center',
      },
      aboutImage: {
        flex: 1,
        position: 'relative',
      },
      aboutImageBefore: {
        content: "''",
        position: 'absolute',
        top: '-20px',
        left: '-20px',
        right: '20px',
        bottom: '20px',
        border: '2px solid #f72585',
        zIndex: -1,
      },
      aboutImageImg: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        border: 'solid orange',
      },
      aboutContent: {
        flex: 1,
      },
      aboutContentH2: {
        fontSize: '2.5rem',
        marginBottom: '1rem',
        color: '#333',
      },
      aboutContentP: {
        fontSize: '1.1rem',
        lineHeight: '1.6',
        color: '#666',
        marginBottom: '2rem',
      },
      ctaButton: {
        padding: '0.8rem 1.5rem',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#fff',
        background: 'orange',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'opacity 0.3s ease',
      },
      ctaButtonHover: {
        opacity: '0.9',
      },
      '@media (max-width: 768px)': {
        aboutContainer: {
          flexDirection: 'column',
        },
        aboutImage: {
          marginBottom: '2rem',
        },
        aboutImageBefore: {
          top: '-10px',
          left: '-10px',
          right: '10px',
          bottom: '10px',
        },
      },
    };