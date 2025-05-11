import React from 'react';
import Navbar from './Accueil/Navbar';
import BannerProjet from './Projets/BannerProjet';
import ProjetList from './Projets/ProjetList';
import FormSection from './Accueil/FormSection';
import Footer from './Accueil/Footer'

function Projets() {
  return (
      <div style={{ backgroundColor: '#fdf6ec', minHeight: '100vh',margin:'-6px' }}>
        <Navbar/>
        <BannerProjet/>
        <ProjetList/>
        <FormSection/>
        <Footer/>
      </div>
  );
}

export default Projets;