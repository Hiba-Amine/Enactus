import React from 'react';
import Counter from './Counter';
export default function CounterSection() {
  return (
    <section style={styles.section}>
      <div style={styles.content}>
        <h2 style={styles.title}>
        Présentation<span style={styles.orange}> ENACTUS Morocco</span>
        </h2>
        <p style={styles.subtitle}>
         Enactus est un réseau mondial qui inspire les jeunes à utiliser l'entrepreneuriat pour résoudre les défis sociaux et économiques. Enactus Maroc, fondé en 2003, fait partie de ce réseau et offre aux étudiants l'opportunité de concrétiser des projets innovants ayant un impact direct sur leur communauté.
        </p>
       
        <div style={styles.stats}>
        <div style={styles.statItem}>
            <span style={styles.yellowStat}>+ <Counter end={3000} suffix="heures" /></span>
            <p style={styles.statText}>Heures de formations et d’accompagnement dispensées</p>
          </div>
          <div style={styles.statItem}>
            <span style={styles.greenStat}>+ <Counter end={40} suffix="projets" /></span>
            <p style={styles.statText}>Projets développés</p>
          </div>
          <div style={styles.statItem}>
            <span style={styles.blueStat}>+ <Counter end={500} suffix="personnes" /></span>
            <p style={styles.statText}>Bénéficiaires impactés</p>
          </div>
          <div style={styles.statItem}>
            <span style={styles.redStat}><Counter end={13} suffix="heures" /></span>
            <p style={styles.statText}>Objectives du développement durable touchés
            </p>
          </div>
          <div style={styles.statItem}>
            <span style={styles.orangeStat}>+ <Counter end={1000} suffix="étudiants"/></span>
            <p style={styles.statText}>Jeunes mobilisés </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '80px 20px',
    color: 'white',
    textAlign: 'center',
  },
  content: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: 'black'
  },
  orange: {
    color: '#f5a623',
  },
  subtitle: {
    fontSize: '20px',
    lineHeight: '1.6',
    marginBottom: '50px',
    color: 'grey',
    fontStyle:'oblique',
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '30px',
  },
  statItem: {
    flex: '1 1 200px',
    minWidth: '200px',
  },
  orangeStat: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#f5a623',
  },
  greenStat: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#90c96c',
  },
  blueStat: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#4a90e2',
  },
  redStat: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: 'Crimson',
  },
  yellowStat: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: 'gold',
  },
  statText: {
    fontSize: '15px',
    marginTop: '10px',
    color: 'grey',
  },
};