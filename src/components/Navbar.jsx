import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/ZgraneDzieciakiLogo.png';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaList,
  FaImages,
  FaEnvelope,
  FaShieldAlt,
  FaChevronDown,
  FaGraduationCap,
  FaFlask,
  FaChild,
  FaBuilding,
  FaChalkboardTeacher,
  FaHandHoldingHeart,
  FaMoneyBill,
  FaHandPaper,
  FaComments,
  FaHeadphones,
  FaWalking,
  FaHandHoldingMedical,
} from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileGalleryOpen, setIsMobileGalleryOpen] = useState(false);

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
    <nav
      className={`bg-white shadow-lg fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'h-12' : 'h-22'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-full">
        <div className={`flex justify-between items-center h-full transition-all duration-300`}>
          <div className="flex items-center">
            <a href="/">
              <img
                src={logo}
                alt="Zgrane Dzieciaki Logo"
                className={`transition-all duration-300 ${isScrolled ? 'h-8' : 'h-14 lg:h-20'}`}
              />
            </a>
          </div>

          <button className="md:hidden text-gray-600 hover:text-gray-900" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes size={isScrolled ? 20 : 24} />
            ) : (
              <FaBars size={isScrolled ? 20 : 24} />
            )}
          </button>

          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className={`text-gray-600 hover:text-gray-900 transition-all duration-300 ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}
            >
              Home
            </Link>

            <div className="relative group">
              <Link
                to="/about"
                className={`text-gray-600 hover:text-gray-900 transition-all duration-300 flex items-center gap-1 ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}
              >
                About
                <FaChevronDown
                  className={`transform transition-transform duration-200 group-hover:rotate-180`}
                  size={12}
                />
              </Link>

              <div className="absolute rounded-md left-1/2 transform -translate-x-1/2 pt-1 hidden group-hover:block group-hover:rounded-md">
                <div className="bg-white shadow-lg rounded-md w-48 border-t-2 border-blue-500">
                  <Link
                    to="/about/standards"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaChild className="text-blue-500" />
                    <span>Standards</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Link
                to="/offer"
                className={`text-gray-600 hover:text-gray-900 transition-all duration-300 flex items-center gap-1 ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}
              >
                Offer
                <FaChevronDown
                  className={`transform transition-transform duration-200 group-hover:rotate-180`}
                  size={12}
                />
              </Link>

              <div className="absolute rounded-md left-1/2 transform -translate-x-1/2 pt-1 hidden group-hover:block group-hover:rounded-md">
                <div className="bg-white shadow-lg rounded-md w-48 border-t-2 border-blue-500">
                  <Link
                    to="/offer/study"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaGraduationCap className="text-blue-500" />
                    <span>Study</span>
                  </Link>
                  <Link
                    to="/offer/sensory"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaFlask className="text-blue-500" />
                    <span>Sensory tests</span>
                  </Link>
                  <Link
                    to="/offer/cranial-therapy"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaHandHoldingMedical className="text-blue-500" />
                    <span>Cranial Therapy</span>
                  </Link>
                  <Link
                    to="/offer/neuroflow"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaHeadphones className="text-blue-500" />
                    <span>Neuroflow</span>
                  </Link>
                  <Link
                    to="/offer/corrective"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaWalking className="text-blue-500" />
                    <span>Corrective</span>
                  </Link>
                  <Link
                    to="/offer/hand-therapy"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaHandPaper className="text-blue-500" />
                    <span>Hand Therapy</span>
                  </Link>
                  <Link
                    to="/offer/speech-therapy"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaComments className="text-blue-500" />
                    <span>Speech Therapy</span>
                  </Link>
                  <Link
                    to="/offer/pricing"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaMoneyBill className="text-blue-500" />
                    <span>Pricing</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Link
                to="/gallery"
                className={`text-gray-600 hover:text-gray-900 transition-all duration-300 flex items-center gap-1 ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}
              >
                Gallery
                <FaChevronDown
                  className={`transform transition-transform duration-200 group-hover:rotate-180`}
                  size={12}
                />
              </Link>

              <div className="absolute rounded-md left-1/2 transform -translate-x-1/2 pt-1 hidden group-hover:block group-hover:rounded-md">
                <div className="bg-white shadow-lg rounded-md w-48 border-t-2 border-blue-500">
                  <Link
                    to="/gallery/office"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaBuilding className="text-blue-500" />
                    <span>Office</span>
                  </Link>
                  <Link
                    to="/gallery/classes"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaChalkboardTeacher className="text-blue-500" />
                    <span>Classes</span>
                  </Link>
                  <Link
                    to="/gallery/therapy"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaHandHoldingHeart className="text-blue-500" />
                    <span>Therapy</span>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className={`text-gray-600 hover:text-gray-900 transition-all duration-300 ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/rodo"
              className={`text-gray-600 hover:text-gray-900 transition-all duration-300 ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}
            >
              RODO
            </Link>
          </div>
        </div>

        {/* Mobile menu - with icons and borders */}
        <div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-white shadow-lg z-50`}
        >
          <div className="flex flex-col">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200"
              onClick={toggleMenu}
            >
              <FaHome className="text-blue-500" />
              <span>Home</span>
            </Link>

            {/* About Mobile Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                className="w-full text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200"
              >
                <FaInfoCircle className="text-blue-500" />
                <span>About</span>
                <FaChevronDown
                  className={`transform transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180' : ''}`}
                  size={12}
                />
              </button>

              {isMobileAboutOpen && (
                <>
                  <Link
                    to="/about/standards"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaChild className="text-blue-500" />
                    <span>Standards</span>
                  </Link>
                </>
              )}
            </div>

            {/* Offer Mobile Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="w-full text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200"
              >
                <FaList className="text-blue-500" />
                <span>Offer</span>
                <FaChevronDown
                  className={`transform transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`}
                  size={12}
                />
              </button>

              {isMobileDropdownOpen && (
                <>
                  <Link
                    to="/offer/study"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaGraduationCap className="text-blue-500" />
                    <span>Study</span>
                  </Link>
                  <Link
                    to="/offer/sensory"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaFlask className="text-blue-500" />
                    <span>Sensory tests</span>
                  </Link>
                  <Link
                    to="/offer/cranial-therapy"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaGraduationCap className="text-blue-500" />
                    <span>Cranial Therapy</span>
                  </Link>
                  <Link
                    to="/offer/neuroflow"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaFlask className="text-blue-500" />
                    <span>Neuroflow</span>
                  </Link>
                  <Link
                    to="/offer/corrective"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaGraduationCap className="text-blue-500" />
                    <span>Corrective</span>
                  </Link>
                  <Link
                    to="/offer/hand-therapy"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaFlask className="text-blue-500" />
                    <span>Hand Therapy</span>
                  </Link>
                  <Link
                    to="/offer/speech-therapy"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaGraduationCap className="text-blue-500" />
                    <span>Speech Therapy</span>
                  </Link>
                  <Link
                    to="/offer/pricing"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaFlask className="text-blue-500" />
                    <span>Pricing</span>
                  </Link>
                </>
              )}
            </div>

            <div>
              <button
                onClick={() => setIsMobileGalleryOpen(!isMobileGalleryOpen)}
                className="w-full text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200"
              >
                <FaImages className="text-blue-500" />
                <span>Gallery</span>
                <FaChevronDown
                  className={`transform transition-transform duration-200 ${isMobileGalleryOpen ? 'rotate-180' : ''}`}
                  size={12}
                />
              </button>

              {isMobileGalleryOpen && (
                <>
                  <Link
                    to="/gallery/office"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaBuilding className="text-blue-500" />
                    <span>Office</span>
                  </Link>
                  <Link
                    to="/gallery/classes"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaChalkboardTeacher className="text-blue-500" />
                    <span>Classes</span>
                  </Link>
                  <Link
                    to="/gallery/therapy"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaHandHoldingHeart className="text-blue-500" />
                    <span>Therapy</span>
                  </Link>
                </>
              )}
            </div>

            <Link
              to="/contact"
              className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200"
              onClick={toggleMenu}
            >
              <FaEnvelope className="text-blue-500" />
              <span>Contact</span>
            </Link>
            <Link
              to="/rodo"
              className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2"
              onClick={toggleMenu}
            >
              <FaShieldAlt className="text-blue-500" />
              <span>RODO</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
