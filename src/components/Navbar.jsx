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

          <div className="hidden md:flex md:gap-4 lg:space-x-8 items-center">
            <Link
              to="/"
              className={`text-gray-600 hover:text-gray-900 transition-all duration-300 ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}
            >
              Strona główna
            </Link>

            <div className="relative group">
              <Link
                to="/o-nas"
                className={`text-gray-600 hover:text-gray-900 transition-all duration-300 flex items-center gap-1 ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}
              >
                O nas
                <FaChevronDown
                  className={`transform transition-transform duration-200 group-hover:rotate-180`}
                  size={12}
                />
              </Link>

              <div className="absolute rounded-md left-1/2 transform -translate-x-1/2 pt-1 hidden group-hover:block group-hover:rounded-md">
                <div className="bg-white shadow-lg rounded-md w-48 border-t-2 border-blue-500">
                  <Link
                    to="/o-nas/standardy-ochrony-maloletnich"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaChild className="text-blue-500" />
                    <span>Standardy ochrony małoletnich</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Link
                to="/oferta"
                className={`text-gray-600 hover:text-gray-900 transition-all duration-300 flex items-center gap-1 ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}
              >
                Oferta
                <FaChevronDown
                  className={`transform transition-transform duration-200 group-hover:rotate-180`}
                  size={12}
                />
              </Link>

              <div className="absolute rounded-md left-1/2 transform -translate-x-1/2 pt-1 hidden group-hover:block group-hover:rounded-md">
                <div className="bg-white shadow-lg rounded-md w-48 border-t-2 border-blue-500">
                  <Link
                    to="/oferta/intergacja-sensoryczna"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaGraduationCap className="text-blue-500" />
                    <span>Integracja sensoryczna</span>
                  </Link>
                  <Link
                    to="/oferta/trening-umiejetnosci-spolecznych"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaFlask className="text-blue-500" />
                    <span className="w-fit">Trening umiejętności społecznych</span>
                  </Link>
                  <Link
                    to="/oferta/terapia-kregoslupa"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaHandHoldingMedical className="text-blue-500" />
                    <span>Terapia kręgosłupa</span>
                  </Link>
                  <Link
                    to="/oferta/trening-neuroflow"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaHeadphones className="text-blue-500" />
                    <span>Neuroflow</span>
                  </Link>
                  <Link
                    to="/oferta/korektywa"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaWalking className="text-blue-500" />
                    <span>Korektywa</span>
                  </Link>
                  <Link
                    to="/oferta/terapia-dloni"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaHandPaper className="text-blue-500" />
                    <span>Terapia dłoni</span>
                  </Link>
                  <Link
                    to="/oferta/logopedia"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaComments className="text-blue-500" />
                    <span>Logopedia</span>
                  </Link>
                  <Link
                    to="/oferta/cennik"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaMoneyBill className="text-blue-500" />
                    <span>Cennik</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="relative group">
              <Link
                to="/gallery"
                className={`text-gray-600 hover:text-gray-900 transition-all duration-300 flex items-center gap-1 ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}
              >
                Galeria
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
                    <span>Biuro</span>
                  </Link>
                  <Link
                    to="/gallery/classes"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaChalkboardTeacher className="text-blue-500" />
                    <span>Zajęcia</span>
                  </Link>
                  <Link
                    to="/gallery/therapy"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaHandHoldingHeart className="text-blue-500" />
                    <span>Terapia</span>
                  </Link>
                </div>
              </div>
            </div> */}

            <Link
              to="/kontakt"
              className={`text-gray-600 hover:text-gray-900 transition-all duration-300 ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}
            >
              Kontakt
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
              <span>Strona główna</span>
            </Link>

            {/* About Mobile Dropdown */}
            <div>
              <div className="w-full text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200">
                <FaInfoCircle className="text-blue-500" />
                <a href="/o-nas">
                  <span>O nas</span>
                </a>
                <button onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}>
                  <FaChevronDown
                    className={`transform transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180' : ''}`}
                    size={12}
                  />
                </button>
              </div>

              {isMobileAboutOpen && (
                <>
                  <Link
                    to="/o-nas/standardy-ochrony-maloletnich"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaChild className="text-blue-500" />
                    <span>Standardy ochrony małoletnich</span>
                  </Link>
                </>
              )}
            </div>

            {/* oferta Mobile Dropdown */}
            <div>
              <div className="w-full text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200">
                <FaList className="text-blue-500" />
                <a href="/oferta">
                  <span>oferta</span>
                </a>
                <button onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}>
                  <FaChevronDown
                    className={`transform transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`}
                    size={12}
                  />
                </button>
              </div>

              {isMobileDropdownOpen && (
                <>
                  <Link
                    to="/oferta/intergacja-sensoryczna"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaGraduationCap className="text-blue-500" />
                    <span>Integracja Sensoryczna</span>
                  </Link>
                  <Link
                    to="/oferta/trening-umiejetnosci-spolecznych"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaFlask className="text-blue-500" />
                    <span>Trening umiejętności społecznych</span>
                  </Link>
                  <Link
                    to="/oferta/terapia-kregoslupa"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaGraduationCap className="text-blue-500" />
                    <span>Terapia kręgosłupa</span>
                  </Link>
                  <Link
                    to="/oferta/trening-neuroflow"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaFlask className="text-blue-500" />
                    <span>Neuroflow</span>
                  </Link>
                  <Link
                    to="/oferta/korektywa"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaGraduationCap className="text-blue-500" />
                    <span>Korektywa</span>
                  </Link>
                  <Link
                    to="/oferta/terapia-dloni"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaFlask className="text-blue-500" />
                    <span>Terapia Dłoni</span>
                  </Link>
                  <Link
                    to="/oferta/logopedia"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaGraduationCap className="text-blue-500" />
                    <span>Logopedia</span>
                  </Link>
                  <Link
                    to="/oferta/cennik"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaFlask className="text-blue-500" />
                    <span>Cennik</span>
                  </Link>
                </>
              )}
            </div>

            {/* <div>
              <div className="w-full text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200">
                <FaImages className="text-blue-500" />
                <a href="gallery">
                  <span>Galeria</span>
                </a>
                <button onClick={() => setIsMobileGalleryOpen(!isMobileGalleryOpen)}>
                  <FaChevronDown
                    className={`transform transition-transform duration-200 ${isMobileGalleryOpen ? 'rotate-180' : ''}`}
                    size={12}
                  />
                </button>
              </div>

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
            </div> */}

            <Link
              to="/kontakt"
              className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200"
              onClick={toggleMenu}
            >
              <FaEnvelope className="text-blue-500" />
              <span>Kontakt</span>
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
