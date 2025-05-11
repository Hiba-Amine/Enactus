import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  section: {
    backgroundColor: 'orange',
    padding: '60px 20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: '1',
    minWidth: '300px',
    marginRight: '40px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#333',
  },
  formContainer: {
    flex: '1',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  row: {
    display: 'flex',
    gap: '10px',
  },
  input: {
    flex: 1,
    padding: '8px 10px',
    backgroundColor: 'orange',
    borderRadius: '5px',
    border: '1px solid grey',
    fontSize: '14px',
  },
  select: {
    flex: 1,
    padding: '8px 10px',
    backgroundColor: 'orange',
    borderRadius: '5px',
    border: '1px solid grey',
    fontSize: '14px',
  },
  button: {
    flex: 1,
    padding: '8px 10px',
    backgroundColor: '#000',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '14px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: '0.3s',
  },
  buttonHover: {
    backgroundColor: 'white',
    color: '#000',
  },
  smallText: {
    marginTop: '15px',
    fontSize: '14px',
    color: '#333',
  },
};

const FormSection = () => {
  const [hover, setHover] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.role) {
      setMessage('Veuillez remplir tous les champs.');
      setMessageType('error');
      return;
    }

    console.log('Form submitted with:', formData);
    setMessage('Formulaire envoyé avec succès !');
    setMessageType('success');

    // Redirection après un court délai pour voir le message
    setTimeout(() => {
      navigate('/Envoyer/ConfirmationPage');
    }, 1000);
  };

  return (
    <section style={styles.section}>
      <div style={styles.textContainer}>
        <h2 style={styles.title}>Recevez des nouvelles !</h2>
        <p style={styles.paragraph}>
          Nous croyons qu’en soutenant des étudiants entreprenants, capables d’agir et d’inspirer leur entourage, nous contribuons à bâtir un monde meilleur pour chacun d’entre nous.
        </p>
      </div>

      <div style={styles.formContainer}>
        {message && (
          <div style={{
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: messageType === 'error' ? '#ffdddd' : '#d4edda',
            color: messageType === 'error' ? '#a94442' : '#155724',
            border: `1px solid ${messageType === 'error' ? '#a94442' : '#155724'}`,
            marginBottom: '10px'
          }}>
            {message}
          </div>
        )}

        <div style={styles.row}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Nom et prénom"
            style={styles.input}
            aria-label="Nom et prénom"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="E-mail"
            style={styles.input}
            aria-label="E-mail"
          />
        </div>

        <div style={styles.row}>
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            style={styles.select}
            aria-label="Sélectionnez votre rôle"
          >
            <option value="" disabled>Sélectionner</option>
            <option value="Etudiant">Etudiant</option>
            <option value="Professeur">Professeur</option>
            <option value="Ancien Membre">Ancien Membre</option>
            <option value="Autre">Je ne fais pas partie d'Enactus</option>
          </select>
        
          <button
            type="submit"
            onClick={handleSubmit}
            style={{
              ...styles.button,
              ...(hover && styles.buttonHover),
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Envoyer
          </button>
        </div>

        <p style={styles.smallText}>
          En soumettant le formulaire, je déclare être d'accord avec <a href="#" style={{ textDecoration: 'underline' }}>la politique de confidentialité</a>.
        </p>
      </div>
    </section>
  );
};

export default FormSection;