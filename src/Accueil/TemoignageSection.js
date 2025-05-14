import React, { useState } from 'react';
import member1 from '../images/erasebg-transformed (1).png';
import member2 from '../images/Capture d’écran 2024-11-29 à 00.14.27.png';
import member3 from '../images/erasebg-transformed.png';

const testimonials = [
  {
    name: 'Adam C.',
    role: 'Etudiant en MIP',
    comment: "Faire partie d’Enactus FSBM m’a permis de grandir personnellement et professionnellement. C’est une aventure humaine unique.",
    photo: member1,
  },
  {
    name: 'Hamza R.',
    role: 'Membre Communication',
    comment: "Le club m’a offert un environnement inspirant pour apprendre, innover et surtout avoir un impact concret sur notre communauté.",
    photo: member2,
  },
  {
    name: 'Sara M.',
    role: 'Responsable Projet',
    comment: "Enactus est bien plus qu’un club, c’est une famille qui partage les mêmes valeurs de solidarité et d’engagement.",
    photo: member3,
  },
];
function TemoignageSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Témoignages:</h2>
      <p style={{ fontSize: 20 }}>
        Notre réseau est composé d’étudiants, d’universitaires et de dirigeants d’entreprise. Voir quelques rapports sur l'expérience avec Enactus :
      </p>
      <div style={styles.cardsContainer}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              transform: hoveredCard === index ? 'translateY(-10px)' : 'translateY(0)',
              boxShadow: hoveredCard === index
                ? '0 8px 30px rgba(0,0,0,0.2)'
                : '0 4px 20px rgba(0,0,0,0.1)',
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img src={testimonial.photo} alt={`Photo de ${testimonial.name}`} style={styles.image} />
            <p style={styles.comment}>"{testimonial.comment}"</p>
            <h4 style={styles.name}>{testimonial.name}</h4>
            <p style={styles.role}>{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '60px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '40px',
    color: '#333',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  '@media (max-width: 768px)': {
  cardsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    maxWidth: '300px',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  image: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
    border: '2px solid #f5a623',
  },
  comment: {
    fontStyle: 'italic',
    fontSize: '16px',
    marginBottom: '15px',
    color: '#555',
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#f5a623',
  },
  role: {
    fontSize: '14px',
    color: '#777',
  },
  mediaQuery: {
    '@media (max-width: 768px)': {
      cardsContainer: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
  },
};
export default TemoignageSection;
