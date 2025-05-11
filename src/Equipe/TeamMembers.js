import React from 'react';
import member1 from '../images/wiam.png';
import member2 from '../images/ammar.png';
import member3 from '../images/hind.png';
import member4 from '../images/basma.png';
import member5 from '../images/abdelwadoud (1).png';
import member6 from '../images/imane.png';
import member7 from '../images/younes.png';
import member8 from '../images/maryam.png';

const members = [
  { id: 1, name: 'Younes TAOUMI', role: 'Team Leader', image: member7 },
  { id: 2, name: 'Maryam BADRI', role: 'Vice Team Leader', image: member8 },
  { id: 3, name: 'Wiam ABOUTARA BELRHITI', role: 'Vice President Projec', image: member1 },
  { id: 4, name: 'Abdelwadoud EL BAROUJI', role: 'Treasurer', image: member5 },
  { id: 5, name: 'Ammar MASSAOUDI', role: 'Communication Manager', image: member2 },
  { id: 6, name: 'Hind ZAKY', role: 'Human Ressources Manager', image: member3 },
  { id: 7, name: 'Basma JAWHAR', role: 'Event Manager', image: member4 },
  { id: 8, name: 'Imane OUAZZANI CHAHDI', role: 'Head of partnerships', image: member6 },
];

function TeamGrid() {
  return (
    <section style={styles.section}>
      <div style={styles.grid}>
        {members.map((member) => (
          <div key={member.id} style={styles.card}>
            <div style={styles.imageWrapper}>
              <img src={member.image} alt={member.name} style={styles.image} />
            </div>
            <h3 style={styles.name}>{member.name}</h3>
            <p style={styles.role}>{member.role}</p>
            <p style={styles.subRole}>ENACTUS FSBM</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '60px 20px',
    backgroundColor: '#fdf6ec',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '50px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  imageWrapper: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    padding: '1px',
    marginBottom: '15px',
    background: 'conic-gradient(orange, yellow,orange) ',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '90%',
    height: '90%',
    borderRadius: '50%',
    objectFit: 'cover',
    backgroundColor: '#fdf6ec',
  },
  name: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#222',
    marginTop: '10px',
  },
  role: {
    fontSize: '1rem',
    color: '#888',
    marginTop: '5px',
  },
  subRole: {
    fontSize: '0.9rem',
    color: '#aaa',
    marginTop: '2px',
  },
};

export default TeamGrid;