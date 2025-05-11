import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const JoinForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook pour la navigation

  const styles = {
    section: {
      backgroundColor: '#fdf6ec',
      padding: '60px 20px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    },
    title: {
      fontSize: '40px',
      fontWeight: '900',
      marginBottom: '10px',
      color: 'orange',
    },
    subtitle: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '40px',
    },
    inputRow: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      marginBottom: '20px',
    },
    input: {
      padding: '12px 16px',
      borderRadius: '20px',
      border: 'none',
      width: '250px',
      fontSize: '14px',
      backgroundColor: 'white',
    },
    button: {
      backgroundColor: 'orange',
      color: 'white',
      border: 'none',
      padding: '12px 40px',
      borderRadius: '20px',
      fontWeight: '600',
      fontSize: '14px',
      cursor: 'pointer',
    },
    errorText: {
      color: 'red',
      fontSize: '14px',
      marginTop: '10px',
    },
    infoContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '60px',
      backgroundColor: '#d3d5d9',
      padding: '40px 20px',
      flexWrap: 'wrap',
    },
    infoBlock: {
      textAlign: 'center',
      maxWidth: '250px',
      margin: '20px',
    },
    iconCircle: {
      backgroundColor: 'orange',
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px',
      color: 'white',
      fontSize: '28px',
    },
    infoTitle: {
      fontWeight: 'bold',
      fontSize: '16px',
      marginBottom: '10px',
    },
    infoText: {
      padding: '5px 10px',
      borderRadius: '10px',
      fontSize: '13px',
      marginBottom: '6px',
      display: 'inline-block',
    },
  };

  const handleSubmit = () => {
    // Validation des champs
    if (!email || !name) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    setError('');
    navigate('/Envoyer/ConfirmationPage');
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Contactez-nous</h2>
      <p style={styles.subtitle}>
        Des questions ou des remarques ? Écrivez-nous simplement un message!
      </p>

      <div style={styles.inputRow}>
        <div>
          <input
            type="email"
            placeholder="Entrez une adresse e-mail valide"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Entrez votre nom"
            style={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
      </div>

      {error && <div style={styles.errorText}>{error}</div>}

      <button style={styles.button} onClick={handleSubmit}>SOUMETTRE</button>

      <div style={styles.infoContainer}>
        <div style={styles.infoBlock}>
          <div style={styles.iconCircle}>
            <FaEnvelope />
          </div>
          <div style={styles.infoTitle}>NOTRE E-MAIL</div>
          <div style={styles.infoText}>enactus24.25fsbm@gmail.com</div>
        </div>

        <div style={styles.infoBlock}>
          <div style={styles.iconCircle}>
            <FaPhone />
          </div>
          <div style={styles.infoTitle}>TÉLÉPHONE</div>
          <div style={styles.infoText}>+212 639 380 894</div>
        </div>

        <div style={styles.infoBlock}>
          <div style={styles.iconCircle}>
            <FaMapMarkerAlt />
          </div>
          <div style={styles.infoTitle}>EMPLACEMENT DE NOTRE BUREAU</div>
          <div style={styles.infoText}>Enactus FSBM, Faculté des Sciences Ben M'Sick</div>
          <div style={styles.infoText}>Bd Commandant Driss Al Harti, Casablanca 20670 - Maroc</div>
        </div>
      </div>
    </section>
  );
};

export default JoinForm;