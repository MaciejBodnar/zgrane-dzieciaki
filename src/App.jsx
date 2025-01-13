import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Rodo from './pages/Rodo';
import Offer from './pages/Offer';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Footer from './components/Footer';
import Study from './pages/Study';
import Sensory from './pages/Sensory';
import Standards from './pages/Standards';
import Office from './pages/Office';
import Classes from './pages/Classes';
import Therapy from './pages/Therapy';
import ScrollToTop from './components/ScrollToTop';
import CranialTherapy from './pages/offer/CranialTherapy';
import Neuroflow from './pages/offer/Neuroflow';
import Corrective from './pages/offer/Corrective';
import HandTherapy from './pages/offer/HandTherapy';
import SpeechTherapy from './pages/offer/SpeechTherapy';
import Pricing from './pages/offer/Pricing';
import Home from './pages/Home';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            onClick={toggleMenu}
          />
        )}

        <Navbar />

        <div className={`transition-all duration-300 ${isScrolled ? 'pt-12' : 'pt-16'}`}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/about/standards" element={<Standards />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rodo" element={<Rodo />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/offer/study" element={<Study />} />
            <Route path="/offer/sensory" element={<Sensory />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/office" element={<Office />} />
            <Route path="/gallery/classes" element={<Classes />} />
            <Route path="/gallery/therapy" element={<Therapy />} />
            <Route path="/offer/cranial-therapy" element={<CranialTherapy />} />
            <Route path="/offer/neuroflow" element={<Neuroflow />} />
            <Route path="/offer/corrective" element={<Corrective />} />
            <Route path="/offer/hand-therapy" element={<HandTherapy />} />
            <Route path="/offer/speech-therapy" element={<SpeechTherapy />} />
            <Route path="/offer/pricing" element={<Pricing />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
