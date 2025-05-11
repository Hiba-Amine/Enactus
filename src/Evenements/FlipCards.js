import React from 'react';
import img1 from "../images/Comp-D.Final-Prix.JPG";
import img2 from "../images/Hackathon.JPG";
import img3 from '../images/CompétitionPhasedesLigues.JPG';

const FlipCards = () => {
  const styles = {
    section: {
      textAlign: 'center',
      paddingTop: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    heading: {
      fontSize: '42px',
      fontWeight: 'bold',
      marginBottom: '40px',
      color: '#f4a300'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '20px',
        perspective: '1000px',
        gap: '60px',
        rowGap: '40px',
        columnGap: '90px',
      },
    card: {
      width: '300px',
      height: '400px',
      position: 'relative',
      transformStyle: 'preserve-3d',
      transition: 'transform 0.8s',
      cursor: 'pointer'
    },
    cardWrapper: {
      perspective: '1000px'
    },
    flipped: {
      transform: 'rotateY(180deg)'
    },
    face: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backfaceVisibility: 'hidden',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
    },
    front: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingBottom: '20px',
      fontSize: '22px',
      fontWeight: 'bold'
    },
    back: {
      backgroundColor: '#fff',
      transform: 'rotateY(180deg)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center'
    },
    backTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#f4a300',
      marginBottom: '10px'
    },
    backText: {
      fontSize: '15px',
      color: '#444'
    }
  };
  const [hover1, setHover1] = React.useState(false);
  const [hover2, setHover2] = React.useState(false);
  const [hover3, setHover3] = React.useState(false);

  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>Nos moments forts</h2>
      <div style={styles.container}>
        <div
          style={styles.cardWrapper}
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
        >
          <div
            style={{
              ...styles.card,
              ...(hover1 ? styles.flipped : {})
            }}
          >
            <div
              style={{
                ...styles.face,
                ...styles.front,
                backgroundImage: `url(${img1})`
              }}
            >
              Demi Finale 
            </div>
            <div style={{ ...styles.face, ...styles.back }}>
              <div style={styles.backTitle}>Demi finale</div>
              <div style={styles.backText}>
              La fin d'une aventure, mais le début d'une autre. Nous aurions pu atteindre des sommets, mais les choses ne se passent pas toujours comme on l'aurait souhaité.
L'histoire est en marche et nous sommes fiers d’être parmi les 12 meilleures équipes du Maroc, une première historique pour Enactus FSBM.
The journey is ongoing.
E la storia continua.

              </div>
            </div>
          </div>
        </div>

        <div
          style={styles.cardWrapper}
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
        >
          <div
            style={{
              ...styles.card,
              ...(hover2 ? styles.flipped : {})
            }}
          >
            <div
              style={{
                ...styles.face,
                ...styles.front,
                backgroundImage: `url(${img2})`
              }}
            >
               Hackathon
            </div>
            <div style={{ ...styles.face, ...styles.back }}>
              <div style={styles.backTitle}> Hackathon</div>
              <div style={styles.backText}>
              Du 15 au 17 décembre 2023, notre équipe a participé au Méga Hackathon Panafricain, où nous avons eu l'opportunité de développer des idées de projets innovants en un temps limité, démontrant notre créativité et notre capacité à relever des défis dans un cadre compétitif.
              </div>
            </div>
          </div>
        </div>

        {/* 🆕 Carte 3 */}
        <div
          style={styles.cardWrapper}
          onMouseEnter={() => setHover3(true)}
          onMouseLeave={() => setHover3(false)}
        >
          <div
            style={{
              ...styles.card,
              ...(hover3 ? styles.flipped : {})
            }}
          >
            <div
              style={{
                ...styles.face,
                ...styles.front,
                backgroundImage: `url(${img3})`
              }}
            >
              Phase des ligues
            </div>
            <div style={{ ...styles.face, ...styles.back }}>
              <div style={styles.backTitle}>Phase des ligues</div>
              <div style={styles.backText}>
              Le 29 juin 2024, en compétition à UIT Kenitra, Enactus FSBM a pris sa place méritée en tête, prouvant que la foi dépasse les statistiques. Malgré des chances qui semblaient minimes, c’est la confiance et l’esprit d’équipe qui ont dominé. Avec la certitude de se qualifier pour le prochain tour, chaque membre de l’équipe a fait preuve de détermination. Parce qu’en famille et entre coéquipiers, la force est décuplée, et ensemble, ils avancent vers de nouveaux défis avec la conviction que le meilleur est à venir.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCards;