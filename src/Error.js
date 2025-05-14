import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
      padding: '40px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    title: {
      fontSize: '96px',
      fontWeight: '700',
      color: '#e74c3c',
      margin: 0
    },
    message: {
      fontSize: '28px',
      fontWeight: '500',
      color: '#333',
      marginTop: '10px'
    },
    subtext: {
      fontSize: '16px',
      color: '#666',
      marginTop: '8px',
      marginBottom: '24px'
    },
    link: {
      textDecoration: 'none',
      padding: '12px 24px',
      backgroundColor: '#007bff',
      color: 'white',
      borderRadius: '4px',
      fontWeight: '500',
      transition: 'background-color 0.2s ease-in-out'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Page non trouvée</p>
      <p style={styles.subtext}>
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        to="/"
        style={styles.link}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        Retour à l’accueil
      </Link>
    </div>
  );
};

export default NotFound;