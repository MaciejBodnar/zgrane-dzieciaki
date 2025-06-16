import { useEffect, useState } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
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
    <>
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
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
