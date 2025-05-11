import React from 'react';
import Navbar from './Accueil/Navbar';
import HeroSection from './Accueil/HeroSection';
import AboutSection from './Accueil/AboutSection';
import CounterSection from './Accueil/CounterSection';
import Footer from './Accueil/Footer';
import FormSection from './Accueil/FormSection';
import NewsSection from './Accueil/NewsSection';
import PartnersSection from './Accueil/PartnersSection';
import ProjectSection from './Accueil/ProjectSection';
import TemoignageSection from './Accueil/TemoignageSection';
function Accueil() {
  return (
      <div style={{ backgroundColor: '#fdf6ec', minHeight: '100vh',margin:'-6px' }}>
        <Navbar/>
        <HeroSection/>
        <CounterSection/>
        <TemoignageSection/>
        <NewsSection/>
        <AboutSection/>
        <ProjectSection/>
        <PartnersSection/>
        <FormSection/>
        <Footer/>
      </div>
  );
}

export default Accueil;