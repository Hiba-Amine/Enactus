import React from 'react';
import { useNavigate } from 'react-router-dom';
import event1 from '../images/CompétitionPhasedesLigues.JPG';
import event2 from '../images/8 Mars.JPG';
import event3 from '../images/Compétition.JPG';
import event4 from '../images/Hackathon.JPG';

const news = [
  {
    tag: '#Événement',
    title: "COMPÉTITION DES LIGUES ENACTUS : UN VOYAGE VERS L’IMPACT SOCIAL",
    desc: "Découvrir les jeunes qui portent des initiatives à impact...",
    location: "Kenitra",
    date: "29 juin 2024",
    time: " - ",
    image: event1,
  },
  {
    tag: '#Événement',
    title: "CÉLÉBRANT LA JOURNÉE INTERNATIONALE DES DROITS DES FEMMES LE 8 MARS",
    date:"08 mars 2024",
    location: "Maroc",
    image: event2,
  },
  {
    tag: '#Événement',
    title: "JOURNÉE D’INTÉGRATION ENACTUS : FAÇONNER L’AVENIR AVEC L’INNOVATION SOCIALE",
    date:"2024 - 2025",
    location: "Maroc",
    image: event3,
  },
  {
    tag: '#Événement',
    title: "HACKONS L’AVENIR : LE MÉGA HACKATHON PANAFRICAIN D’ENACTUS",
    location: "Maroc",
    date: "15 décembre 2023 - 17 décembre 2023",
    image: event4,
  },
];
function NewsSection() {
  const navigate = useNavigate();

  const goToEvenements = () => {
    navigate('/evenements');
  };

  return (
    <section style={styles.section}>
      <style>{`
        .link-title h2 {
          text-decoration: none;
          color: inherit;
          transition: text-decoration 0.3s;
          cursor: pointer;
        }
        .link-title h2:hover {
          text-decoration: underline;
        }
      `}</style>

      <div style={styles.header}>
        <img src={event1} alt="Journée d'envol" style={styles.mainImage} />
        <div>
          <a className='link-title' onClick={goToEvenements}><h2 style={styles.mainTitle}>{news[0].title}</h2></a>
          <p style={styles.mainDesc}>{news[0].desc}</p>
          <p style={styles.meta}><span>📍 {news[0].location}</span> | <span>🗓️ {news[0].date}</span> | <span>⏰ {news[0].time}</span></p>
        </div>
      </div>

      <div style={styles.cards}>
        {news.slice(1).map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.image} alt={item.title} style={styles.cardImage} />
            <p style={styles.tag}>{item.tag}</p>
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.meta}>📍 {item.location} {item.date ? `| 🗓️ ${item.date}` : ''}</p>
            <button
              style={styles.plus}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={goToEvenements}
            >+</button>
          </div>
        ))}
      </div>
    </section>
  );
}

const handleMouseEnter = (e) => {
  e.currentTarget.style.transform = 'rotate(180deg)';
  e.currentTarget.style.backgroundColor = 'gold';
};

const handleMouseLeave = (e) => {
  e.currentTarget.style.transform = 'rotate(0deg)';
  e.currentTarget.style.backgroundColor = '#f5a623';
};

const styles = {
  section: {
    padding: '40px',
    backgroundColor: '#fdf6ec',
    fontFamily: 'sans-serif',
  },
  header: {
    display: 'flex',
    gap: '30px',
    marginBottom: '50px',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  mainImage: {
    width: '300px',
    height: 'auto',
    borderRadius: '12px',
  },
  mainTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '10px 0',
    color: '#333',
  },
  mainDesc: {
    fontSize: '16px',
    color: '#555',
  },
  meta: {
    fontSize: '14px',
    color: '#999',
    marginTop: '10px',
  },
  cards: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: '320px',
    minHeight: '420px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    padding: '20px',
    position: 'relative',
    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardImage: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '12px',
  },
  tag: {
    color: '#f5a623',
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  cardTitle: {
    fontSize: '17px',
    color: '#333',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  plus: {
    position: 'absolute',
    border: 'none',
    bottom: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#f5a623',
    color: '#fff',
    fontSize: '24px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    textAlign: 'center',
    lineHeight: '40px',
    fontWeight: 'bold',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
  },
};
export default NewsSection;