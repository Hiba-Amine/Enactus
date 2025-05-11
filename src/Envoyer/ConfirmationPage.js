import React from 'react';
import {Link} from 'react-router-dom'
function ConfirmationPage() {
  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
        <div style={styles.checkIcon}>✔️</div>
      </div>
      <h1 style={styles.title}>Complété!</h1>
      <p style={styles.paragraph}>
      Merci d'avoir choisi Enactus. Nous vous contacterons dans les plus brefs délais pour donner suite à votre contact.
      </p>
      <p style={styles.paragraph}>
      Si vous le souhaitez, n'hésitez pas à nous contacter par téléphone.
      </p>
      <Link to={'/'}><button style={styles.button}>Retourner à l'accueil</button></Link>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#1F2937',
    color: '#fff',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
  },
  iconContainer: {
    backgroundColor: '#F7C948',
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  checkIcon: {
    fontSize: '36px',
    color: '#2C2F38', 
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1rem',
    marginBottom: '10px',
    maxWidth: '600px',
  },
  button: {
    marginTop: '30px',
    padding: '12px 30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    backgroundColor: '#F7C948',
    color: '#2C2F38',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ConfirmationPage;