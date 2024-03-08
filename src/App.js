import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Company from './components/pages/Company';
import Container from './components/layout/Container'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
    <NavBar/>
    
    <Container customClass="min-heigth">
    <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/company" element={<Company />} />
              <Route path="/newproject" element={<NewProject />} />
    </Routes>
    </Container>
   
    <Footer/>
  </Router>
  
  );
}

export default App;
