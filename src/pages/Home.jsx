import Box from '../components/Box';
import map from '../assets/Mapa.png';
import MainCarousel from '../components/MainCarousel';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col gap-[60px]">
        <MainCarousel />

        <div className="grid grid-cols-1 gap-12">
          <Box
            backgroundColor="bg-green-50"
            className="cursor-pointer h-full border-green-200 hover:bg-green-100"
            url="/about"
          >
            <h2 className="text-2xl font-semibold mb-2">O nas</h2>
            <p className="text-gray-600">
              Witamy na stronie Centrum Rozwoju Dziecka Zgrane Dzieciaki w Ząbkach (wcześniej
              Małolat). Mamy przyjemność współpracować z Państwem już od 2010 roku.
            </p>
          </Box>

          <Box
            padding="p-6"
            backgroundColor="bg-blue-50"
            className="border border-blue-200 h-full hover:bg-blue-100"
            url="/offer"
          >
            <h2 className="text-2xl font-semibold mb-2">Oferta</h2>
            <p className="text-gray-600 flex flex-col gap-4">
              <span>
                <strong>
                  UWAGA!! OBECNIE PROWADZIMY NABÓR NA ZAJĘCIA TUS (TRENING UMIEJĘTNOŚCI SPOŁECZNYCH)
                  <br />{' '}
                </strong>
              </span>

              <span>
                Zajęcia będą odbywały się cyklicznie w soboty o stałych godzinach od września do
                czerwca. Ruszamy w połowie września 2023 roku. Serdecznie zapraszamy!!
                <br />
              </span>

              <ul className="list-disc list-inside">
                <span className="text-green-600">
                  Prosimy o zgłaszanie dzieci w następujących grupach wiekowych
                </span>
                <li>4-5 lat</li>
                <li>7-8 lat</li>
                <li>9-11 lat</li>
              </ul>
              <span>
                Jeśli znajdą się chętni – zajmiemy się również młodzieżą, w tym licealną W celu
                zgłoszenia dziecka prosimy o kontakt na nr <strong>691 031 311</strong> lub{' '}
                <strong>668 853 487 </strong>
                Oferujemy pomoc diagnostyczno-terapeutyczną dla dzieci z zaburzeniami integracji
                sensorycznej, wadami wymowy, wadami postawy i trudnościami w nauce.
              </span>
            </p>
          </Box>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Box
              padding="p-6"
              backgroundColor="bg-yellow-50"
              className="border border-yellow-200 h-full hover:bg-yellow-100 w-full"
              url="/contact"
            >
              <h2 className="text-2xl font-semibold mb-2">
                Centrum Rozwoju Dziecka „Zgrane Dzieciaki” w Ząbkach
              </h2>
              <h4 className="text-lg text-gray-700 font-semibold my-2">Najwaniejsze informacje</h4>
              <p className="text-gray-600 flex flex-col gap-2">
                <span>
                  ul. Kościelna 9<br /> 05-091 Ząbki{' '}
                </span>
                <span>
                  tel. kom. +48 691 031 311 <br /> gabinet@zgranedzieciaki.pl{' '}
                </span>
                <span>Bank Millennium S.A. 82 1160 2202 0000 0003 8531 8733</span>
              </p>
            </Box>
            <Link 
              to="/contact#map-section" 
              onClick={() => {
                setTimeout(() => {
                  document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              <img
                src={map}
                alt="Zgrane Dzieciaki Mapa"
                className="w-full h-full object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
