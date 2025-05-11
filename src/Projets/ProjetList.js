import React from 'react';
import img1 from '../images/uniride.png';
import img2 from '../images/biogazify.png';
import img3 from '../images/enbo.png';
import img4 from '../images/bistrokab.png';
import img5 from '../images/reskin.png';
import img6 from '../images/Botaba9a.png';
import img7 from '../images/sitauti.png';
import img8 from '../images/voltainos.png';
import img9 from '../images/bottle3d.png';
import img10 from '../images/educlass mingle.png';
import img11 from '../images/potrinov.png';

const projets = [
  { image: img1, titre: 'Uniride', description: "une application mobile optimise le transport étudiant au Maroc avec covoiturage adaptatif, promouvant mobilité durable, économique et sécurisée.",lien:'https://www.instagram.com/uniride_etu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='},
  { image: img2, titre: 'Biogazify', description: "projet vise à convertir du biogaz issu de déchets organiques en une source d'énergie pratique pour la cuisine."},
  { image: img3, titre: 'Enbo', description:"propose des boîtes écologiques à trois couches, faites de matériaux recyclés, pour protéger les produits et assurer leur traçabilité." },
  { image: img4, titre: 'BistroKab', description: "le câprier, trésor nutritionnel souvent négligé au Maroc, est mis en lumière par Bistrolabb. En créant des produits alimentaires sains et variés à base de câpres, cette initiative soutient les producteurs locaux, valorise le savoir-faire artisanal et crée des opportunités économiques pour les femmes, tout en ravivant la cuisine marocaine traditionnelle. ",lien:'https://www.instagram.com/bistro_kabb/?utm_source=ig_web_button_share_sheet' },
  { image: img5, titre: 'Reskin', description: "Face au gaspillage alimentaire et à l'impact néfaste des cosmétiques industriels sur l’environnement, Reskin transforme ces résidus en cosmétiques durables. En recyclant les déchets alimentaires, l'entreprise réduit l'empreinte carbone et crée des produits respectueux de la peau et de la planète, répondant ainsi aux attentes des consommateurs éco-conscients.",lien:'https://www.instagram.com/reskincosmetique?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  { image: img6, titre: 'Botaba9a', description: "Lorsque des coupures inattendues de gaz interrompent vos repas ou douches, cela perturbe votre quotidien. Bota Baقa apporte une solution intelligente avec un capteur qui mesure le niveau de gaz restant et envoie des alertes avant que la bouteille ne soit vide, garantissant ainsi une gestion fluide et sans surprise de vos réserves.",lien:'https://www.instagram.com/botaba9a/?utm_source=ig_web_button_share_sheet' },
  { image: img7, titre: 'Sitauti', description: "Une plateforme interactive dédiée à l'autisme, offrant divers moyens de soutien aux autistes, leurs familles et aidants,répondant à un besoin social urgent.",lien:'https://www.instagram.com/sit.auti?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  { image: img8, titre: 'Voltainos', description: "Avec sa solution énergétique durable, VOLTAINOS combine l'énergie éolienne avec la technologie piézo électrique pour une production d'électricité flexible et durable."},
  { image: img9, titre: 'Bottle3D', description: "projet vise à collecter et traiter les bouteilles en plastique pour les recycler en filaments utilisables dans les imprimantes 3D." },
  { image: img10, titre: 'EduClass Mingle', description: "un site web intégrant réseaux sociaux et étude, facilitant l'apprentissage, la révision et la communication simultanément pour les utilisateurs.",lien:'https://www.instagram.com/educlassmingle?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='},
  { image: img11, titre: 'Potrinov', description:"POTRINOV réinvente l’art de la poterie en alliant savoir-faire traditionnel et innovation moderne. Avec des créations uniques et un service digital en cours de finalisation, nous offrirons à nos partenaires une visibilité authentique et engageante. Ce projet vise à soutenir un artisanat durable et éco-responsable, tout en promettant une expérience enrichissante pour tous." ,lien:'https://www.instagram.com/potrinov.ma?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='},
];

const ProjetList = () => {
  return (
    <section style={styles.gridSection}>
      <div style={styles.grid}>
        {projets.map((projet, index) => (
          <div key={index} style={{ ...styles.card, animationDelay: `${index * 0.1}s` }} className="card-fade-in">
            <img src={projet.image} alt={projet.titre} style={styles.image} />
            <h3 style={styles.titre}>{projet.titre}</h3>
            <p style={styles.description}>{projet.description}</p>
            {projet.lien && (
               <a href={projet.lien} style={styles.link}>Voir plus →</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  gridSection: {
    padding: '60px 40px',
    backgroundColor: '#fdf6ec',
    fontFamily: 'Arial, sans-serif',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'left',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    animation: 'fadeInUp 0.6s ease both',
    border:'orange solid'
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'contain',
    backgroundColor: '#fdf6ec',
    borderRadius: '10px',
    marginBottom: '15px',
  },
  titre: {
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '10px',
    color: '#111827',
  },
  description: {
    fontSize: '14px',
    color: '#555',
  },
  link: {
    marginTop: '10px',
    display: 'inline-block',
    color: '#f59e0b',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
};

// Injecter animation CSS globalement
const styleTag = document.createElement('style');
styleTag.textContent = `
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.card-fade-in:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}
`;
document.head.appendChild(styleTag);

export default ProjetList;