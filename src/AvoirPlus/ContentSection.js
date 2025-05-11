import React from 'react';
import video from '../images/official trailer.mp4';

const styles = {
  sectionContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '2rem',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    maxWidth: '1000px',
    margin: 'auto',
    marginTop: '-160px',
    position: 'relative',
    zIndex: 10,
  },
  tag: {
    backgroundColor: '#facc15',
    color: '#ffffff',
    fontSize: '12px',
    padding: '4px 16px',
    borderRadius: '999px',
    fontWeight: '600',
    textTransform: 'uppercase',
    display: 'inline-block',
    marginBottom: '16px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  highlight: {
    color: '#facc15',
  },
  subtitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '8px',
  },
  paragraph: {
    marginTop: '16px',
    color: '#4B5563',
    lineHeight: '1.6',
  },
  videoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '2rem',
  },
  video: {
    width: '80%',
    maxWidth: '800px',
    borderRadius: '20px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
    outline: 'none',
  },
};

const ContentSection = () => {
  return (
    <div style={styles.sectionContainer}>
      <span style={styles.tag}>Enactus dans le contexte international</span>

      <h2 style={styles.title}>
      En phase avec les Objectifs d’<span style={styles.highlight}>Enactus FSBM</span>Global et les ODD des Nations Unies
      </h2>

      <h1 style={styles.subtitle}>
      L’axe Jeunesse et Innovation Sociale
      </h1>

      <p style={styles.paragraph}>
      Enactus FSBM, fondée en mars 2014 par Abderazak Bouhram, est l'héritière d'initiatives lancées en 2009 sous l'appellation SIFE. Depuis sa création, l’équipe développe des projets à impact social et économique, mobilisant chaque année 50 à 100 membres. Enactus FSBM a récemment été classée parmi le top 12 du Maroc et a été demi-finaliste lors des compétitions 2023-2024
      </p>

      <div style={styles.videoContainer}>
        <video
          style={styles.video}
          controls
          autoPlay
          muted
          loop
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ContentSection;