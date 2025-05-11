import React from 'react';
import img from '../images/Compétition.JPG';

const styles = {
  headerImage: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
  },
};

const HeaderImage = () => {
  return (
    <div>
      <img 
        src={img}
        alt="Image" 
        style={styles.headerImage}
      />
    </div>
  );
};

export default HeaderImage;