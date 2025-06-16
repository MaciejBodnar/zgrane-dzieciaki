import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroBanner from '../components/HeroBanner';
import farbaImage from '../assets/Farba.jpg';
import { FaHandHoldingHeart, FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';

const Offer = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs />

      {/* Hero Section */}
      <HeroBanner
        image={farbaImage}
        title="Oferta"
        subtitle="Profesjonalna pomoc dla Twojego dziecka"
        color={'bg-gradient-to-t from-pink-500/50 to-transparent border-2 border-pink-200'}
      />

      {/* Announcement Box */}
      <Box className="mb-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white transform hover:scale-[1.02] transition-transform">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">
            ZAPRASZAMY NA ZAJĘCIA TRENINGU UMIEJĘTNOŚCI SPOŁECZNYCH DZIECI W WIEKU 7-8 LAT
          </h2>
          <div className="flex items-center justify-center gap-2">
            <FaCalendarAlt className="text-xl" />
            <p>
              Zajęcia będą odbywały się cyklicznie w soboty o stałych godzinach od września do
              czerwca.
            </p>
          </div>
          <p className="font-semibold">
            Ruszamy w połowie września 2024 roku. Serdecznie zapraszamy!!
          </p>
          <div className="flex items-center justify-center gap-2 text-lg">
            <FaPhoneAlt />
            <p>Zgłoszenia: 691 031 311</p>
          </div>
        </div>
      </Box>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Box className="bg-gradient-to-br from-green-50 to-blue-50 transform hover:scale-[1.02] transition-transform">
          <FaHandHoldingHeart className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Pomoc diagnostyczno-terapeutyczna
          </h3>
          <p className="text-gray-600">
            Oferujemy pomoc diagnostyczno-terapeutyczną dla dzieci z zaburzeniami integracji
            sensorycznej, wadami wymowy, wadami postawy i trudnościami w nauce.
          </p>
        </Box>

        <Box className="h-full bg-gradient-to-br from-purple-50 to-pink-50 transform hover:scale-[1.02] transition-transform">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Obszary wsparcia</h3>
          <ul className="text-gray-600 space-y-2">
            <li>• Umiejętności ruchowe</li>
            <li>• Czynności samoobsługowe</li>
            <li>• Rozwój mowy</li>
            <li>• Kontrola emocji i zachowania</li>
          </ul>
        </Box>
      </div>

      {/* Main Content Box */}
      <Box className="mb-12 bg-gradient-to-br from-yellow-50 to-orange-50">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Dlaczego warto skorzystać z naszej pomocy?
        </h2>
        <div className="prose max-w-none text-gray-600">
          <p>
            Problemy naszych pociech mogą dotyczyć ich umiejętności ruchowych, czynności
            samoobsługowych, rozwoju mowy, kontroli emocji i zachowania. Mają one ogromne znaczenie
            dla oceny przez dziecko swoich możliwości i kształtowania poczucia własnej wartości,
            umiejętności budowania relacji z innymi, rozwijania umiejętności szkolnych, ale również
            mają wpływ na to jak dziecko odbierane jest przez otoczenie.
          </p>
          <p className="mt-4">
            Zrozumienie problemów naszego dziecka pozwoli nam spojrzeć na nie z innej perspektywy,
            uzbroi nas w cierpliwość, da siłę by wesprzeć. Niejeden leniuszek, uparciuszek,
            niezdarny, nieśmiały, niecierpliwy, wiercipięta czy maruda ­ potrzebuje pomocy nas
            dorosłych.
          </p>
        </div>
      </Box>

      {/* Call to Action */}
      <div className="text-center bg-blue-50 p-8 rounded-xl transform hover:scale-[1.02] transition-transform">
        <a href="/offer/pricing">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Zapraszamy do zapoznania się z naszą ofertą!
          </h2>
          <p className="text-gray-600">Pomożemy Twojemu dziecku rozwinąć jego potencjał</p>
        </a>
      </div>
    </div>
  );
};

export default Offer;
