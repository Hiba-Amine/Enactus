import React from 'react';
import Navbar from './Accueil/Navbar';
import Events from './Evenements/Events';
import FirstSection from './Evenements/FirstSection';
import FlipCards from './Evenements/FlipCards';
import FormSection from './Accueil/FormSection';
import Footer from './Accueil/Footer'
function Evenements() {
  return (
      <div style={{ backgroundColor: '#fdf6ec', minHeight: '100vh',margin:'-6px' }}>
        <Navbar/>
        <FirstSection/>
        <Events/>
        <FlipCards/>
        <FormSection/>
        <Footer/>
      </div>
  );
}

export default Evenements;