import React from 'react';
import Navbar from './Accueil/Navbar';
import Section1 from './Equipe/Section1';
import JoinForm from './Contact/JoinForm';
import Footer from './Accueil/Footer'
function Contact() {
  return (
      <div style={{ backgroundColor: '#fdf6ec', minHeight: '100vh',margin:'-6px' }}>
        <Navbar/>
        <JoinForm/>
        <Footer/>
      </div>
  );
}

export default Contact;