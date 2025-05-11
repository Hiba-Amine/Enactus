import React from 'react';
import Navbar from './Accueil/Navbar';
import HeaderImage from './AvoirPlus/HeaderImage';
import ContentSection from './AvoirPlus/ContentSection';
import FormSection from './Accueil/FormSection';
import Footer from './Accueil/Footer'
const styles = {
    page: {
      backgroundColor: '#f3f4f6',
      minHeight: '100vh',
      paddingBottom: '2rem',
    },
  };
  
function Evenements() {
  return (
      <div style={{ backgroundColor: '#fdf6ec', minHeight: '100vh',margin:'-6px' }}>
        <Navbar/>
        <div style={styles.page}>
           <HeaderImage />
           <ContentSection />
    　　</div>
        <FormSection/>
        <Footer/>
      </div>
  );
}

export default Evenements;