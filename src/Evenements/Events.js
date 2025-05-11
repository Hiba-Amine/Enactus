import React from 'react';
import beachImage from '../images/8 Mars.JPG';
import airImage from '../images/Foot.png';
import hotelImage from '../images/Compétition Demi Final (3).JPG';

const Events = () => {

      const styles = {
        container: {
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          padding: '40px',
          fontFamily: 'Arial, sans-serif',
          maxWidth: '1200px',
          margin: 'auto'
        },
        card: {
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          padding: '30px',
          borderRadius: '16px',
          boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
          backgroundColor: '#fff',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer'
        },
        cardHover: {
          transform: 'translateY(-6px)',
          boxShadow: '0 10px 24px rgba(0,0,0,0.15)'
        },
        image: {
          width: '400px',
          height: '260px',
          objectFit: 'cover',
          borderRadius: '12px',
          flexShrink: 0
        },
        textContent: {
          flex: 1
        },
        title: {
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#f4a300',
          marginBottom: '12px'
        },
        text: {
          fontSize: '17px',
          color: '#444',
          lineHeight: '1.7'
        }
      };
    
      const Card = ({ title, text, imageSrc, imageOnLeft = true }) => {
        const [hovered, setHovered] = React.useState(false);
    
        return (
          <div
            style={{
              ...styles.card,
              flexDirection: imageOnLeft ? 'row' : 'row-reverse',
              ...(hovered ? styles.cardHover : {})
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img src={imageSrc} alt={title} style={styles.image} />
            <div style={styles.textContent}>
              <div style={styles.title}>{title}</div>
              <div style={styles.text}>{text}</div>
            </div>
          </div>
        );
      };
    
      return (
        <div style={styles.container}>
          <Card
            title="L'événement l'innovation au féminin :"
            text="Explorer la science et l'entrepreneuriat a mis en lumière le rôle des femmes dans ces deux domaines. Au programme : des panels sur les femmes leaders en sciences et l'entrepreneuriat, suivis d'un atelier sur le Brand Building. Des experts tels qu’Abdellah Zerhouni, Sanaâ Benahmed et Malika Izid ont partagé leurs expériences inspirantes, clôturant ainsi une journée riche en échanges et apprentissages."
            imageSrc={beachImage}
            imageOnLeft={true}
          />
          <Card
            title="Foot Competition :"
            text="Le MEGA Hackathon Panafricain, organisé par Enactus FSBM en collaboration avec la Faculté des Sciences Ben M'Sick (FSBM) et soutenu par Orange, est une compétition d’innovation exceptionnelle qui se déroulera les 15, 16 et 17 décembre. Cet événement ambitieux invite des participants issus de divers horizons à transformer leurs idées en projets concrets en seulement 54 heures.Sous le thème de l’esprit d’équipe, de la créativité et de l’excellence, ce hackathon met en avant des projets technologiques et entrepreneuriaux, en alliant l’ingéniosité humaine et la passion du travail collaboratif. Les participants auront l’occasion de relever des défis stimulants dans une ambiance dynamique et conviviale, tout en contribuant à un avenir meilleur pour le continent africain.Avec pour devise De l’idée à la concrétisation en 54 heures, ensemble avec passion, vers l’infini ! cet événement promet de marquer un tournant dans le développement de solutions innovantes et durables."
            imageSrc={airImage}
            imageOnLeft={false}
          />
          <Card
            title="Journée d'intégration/lancement"
            text=" La journée de lancement et d'intégration a permis de présenter le club Enactus FSBM tout en facilitant l'intégration des nouveaux membres à travers des jeux et des activités de cohésion. Un moment de partage et de convivialité, marquant le début d'une aventure collective."
            imageSrc={hotelImage}
            imageOnLeft={true}
          />
        </div>
      );
    };

export default Events;