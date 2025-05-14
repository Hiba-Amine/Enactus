import React from 'react';
import logo from '../images/logo - enactus fsbm.png';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <style>
        {`
          .navbar-links a {
            text-decoration: none;
            color: black;
            margin-right: 70px;
            font-family: arial;
            transition: all 0.3s ease; 
            position: relative;
          }

          .navbar-links a:hover {
            text-decoration: none;
            text-decoration-color: orange;
            transform: scale(1.1);
            color: orange;
          }

          .navbar-links a.clicked {
            animation: bounce 0.5s ease;
          }

          @keyframes bounce {
            0%   { transform: scale(1); }
            30%  { transform: scale(0.9); }
            50%  { transform: scale(1.1); }
            70%  { transform: scale(0.95); }
            100% { transform: scale(1); }
          }

          /* Lien actif entouré en orange */
          .navbar-links .active-link {
            border: 2px solid orange;
            border-radius: 8px;
            padding: 4px 10px;
            color: orange;
            font-weight: bold;
            background-color: #fffaf0;
          }
        `}
      </style>

      <nav style={styles.nav}>
        <NavLink to={'/'}><img src={logo} alt="Logo" style={{ height: 80, marginLeft: -10 }} /></NavLink>
        <div className="navbar-links" style={styles.links}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={handleClick}>Accueil</NavLink>
          <NavLink to="/Equipe" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={handleClick}>Notre équipe</NavLink>
          <NavLink to="/Projets" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={handleClick}>Nos projets</NavLink>
          <NavLink to="/Evenements" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={handleClick}>Evénements</NavLink>
          <NavLink to="/Contact" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={handleClick}>Contact</NavLink>
        </div>
      </nav>
    </>
  );
}

function handleClick(e) {
  const element = e.target;
  element.classList.add('clicked');
  setTimeout(() => {
    element.classList.remove('clicked');
  }, 500);
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
  },
  links: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    TextDecoration:'none',
  },
};
export default Navbar;