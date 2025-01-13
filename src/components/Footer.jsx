import {
  FaFacebook,
  FaPhone,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaShieldAlt,
  FaChevronRight,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  };

  return (
    <footer className="bg-white shadow-lg mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex items-start">
            <FaMapMarkerAlt className="text-blue-500 text-xl mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Adres</h3>
              <p className="text-gray-600">
                ul. Kościelna 9
                <br />
                05-091 Ząbki
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaPhone className="text-blue-500 text-xl mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Kontakt</h3>
              <p className="text-gray-600">
                Tel: +48 691 031 311
                <br />
                Email: gabinet@zgranedzieciaki.pl
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaChevronRight className="text-blue-500 text-xl mr-2 flex-shrink-0" />

            <div>
              <h3 className="font-semibold mb-2 flex items-center">Szybkie linki</h3>
              <Link
                to="/about"
                className="text-gray-600 hover:text-blue-500 flex items-center"
                onClick={scrollToTop}
              >
                <FaInfoCircle className="mr-2 flex-shrink-0" />O nas
              </Link>
              <Link
                to="/rodo"
                className="text-gray-600 hover:text-blue-500 flex items-center"
                onClick={scrollToTop}
              >
                <FaShieldAlt className="mr-2 flex-shrink-0" />
                RODO
              </Link>
            </div>
          </div>

          <div className="flex items-start">
            <a
              href="https://www.facebook.com/profile.php?id=100063556563337"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-600"
            >
              <FaFacebook className="text-3xl flex-shrink-0" />
              <span className="ml-2">Obserwuj nas na Facebooku</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm sm:text-base">
          <p>
            © {new Date().getFullYear()} Centrum Rozwoju Dziecka "Zgrane Dzieciaki". Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
