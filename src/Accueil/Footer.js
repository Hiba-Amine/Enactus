import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import img from '../images/Logo white.png'
import img1 from '../images/logo-fsbVF (1).png'

const styles = {
  footer: {
    backgroundColor: '#1F2937',
    color: 'white',
    padding: '50px 20px 20px 20px',
    marginTop: '0',
  },
  topSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '40px',
    marginBottom: '30px',
  },
  column: {
    flex: '1',
    minWidth: '200px',
  },
  logo: {
    height: '90px',
    marginBottom: '10px',
  },
  yellowText: {
    color: 'orange',
  },
  socialIcons: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  iconBox: {
    backgroundColor: 'orange',
    padding: '5px',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '35px',
    height: '35px',
  },
  iconImage: {
    width: '20px',
    height: '20px',
  },
  bottomSection: {
    borderTop: '1px solid #555',
    marginTop: '20px',
    paddingTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    fontSize: '14px',
  },
  fanteLogo: {
    height: '30px',
    marginLeft: '8px',
  },
  icon: {
    fontSize: '2rem', 
    color: '#1F2937', 
  }
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.topSection}>
        <div style={styles.column}>
          <img src={img} alt="Enactus Logo" style={styles.logo} />
          <p>
          Nous sommes convaincus qu’en soutenant des étudiants qui adoptent une démarche entrepreneuriale et inspirent leur entourage,
            <span style={styles.yellowText}> nous contribuons à façonner un avenir meilleur pour chacun de nous.</span>
          </p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.yellowText}>Contactez-nous</h4>
          <p>E-mail : <a href='https://www.gmail.com/enactus24.25fsbm@gmail.com' style={{textDecoration:'none', color:'white',cursor:'pointer'}}>enactus24.25fsbm@gmail.com</a></p>
          <p>Tél : Team leader +212 639 380 894 / head of partnerships</p>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
            <div style={styles.iconBox}>
            <FaFacebook style={styles.icon}/>
            </div>
            </a>
            <a href="https://www.linkedin.com/company/enactus-fsbmc/" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
              <div style={styles.iconBox}>
              <FaLinkedin style={styles.icon}/>
              </div>
            </a>
            <a href="https://www.instagram.com/3nac1us.fsbm?igsh=YWcyaGQyOGMzNzJo" target="_blank" rel="noopener noreferrer " style={{textDecoration:'none'}}>
              <div style={styles.iconBox}>
              <FaInstagram style={styles.icon}/>
              </div>
            </a>
            <a href="https://www.tiktok.com/@enactus.fsbmposting" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
              <div style={styles.iconBox}>
              <FaTiktok style={styles.icon}/>
              </div>
            </a>
          </div>
        </div>

        <div style={styles.column}>
          <h4 style={styles.yellowText}>Adresse</h4>
          <p>
          Enactus FSBM, Faculté des Sciences Ben M'Sick            <br />
          Bd Commandant Driss Al Harti, Casablanca 20670<br />
          Maroc
          </p>
        </div>
      </div>

      <div style={styles.bottomSection}>
        <p style={{fontSize:'11px'}}>ENACTUS FSBM © 2025 TOUS DROITS RÉSERVÉS</p>
        <img src={img1} alt="Fante logo" style={styles.fanteLogo} />
      </div>
    </footer>
  );
};

export default Footer;