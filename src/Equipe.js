import React from 'react';
import Navbar from './Accueil/Navbar';
import Section1 from './Equipe/Section1';
import TeamMembers from './Equipe/TeamMembers';
import PartnersSection from './Accueil/PartnersSection';
import FormSection from './Accueil/FormSection';
import Footer from './Accueil/Footer'
function Equipe() {
  return (
      <div style={{ backgroundColor: '#fdf6ec', minHeight: '100vh',margin:'-6px' }}>
        <Navbar/>
        <Section1/>
        <TeamMembers/>
        <PartnersSection/>
        <FormSection/>
        <Footer/>
      </div>
  );
}

export default Equipe;