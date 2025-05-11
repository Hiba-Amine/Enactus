import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Accueil';
import Equipe from './Equipe';
import ConfirmationPage from './Envoyer/ConfirmationPage';
import Projets from './Projets';
import AvoirPlus from './AvoirPlus';
import Contact from './Contact';
import Evenements from './Evenements';
function App() {
  return (
    <div style={{ backgroundColor: '#fdf6ec', minHeight: '100vh',margin:'-6px' }}>
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Equipe" element={<Equipe />} />
        <Route path="/Envoyer/ConfirmationPage" element={<ConfirmationPage />} />
        <Route path="/Projets" element={<Projets/>} />
        <Route path='/AvoirPlus' element={<AvoirPlus/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Evenements' element={<Evenements/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;