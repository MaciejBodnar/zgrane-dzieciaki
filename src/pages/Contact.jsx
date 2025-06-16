import Breadcrumbs from '../components/Breadcrumbs';
import mapImage from '../assets/Mapa.png';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaMoneyBillWave, FaDirections } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { QuickInfoBanner } from '../components/QuickInfoBanner';

const defaultIcon = new Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Contact = () => {
  const position = [52.27831114831534, 21.12762613481187];
  const contentItems = [
    {
      text: 'Znajdujemy się w centrum Ząbek, w bliskiej odległości od stacji PKP Ząbki.',
    },
    {
      text: 'Dojazd samochodem: Najlepszy dojazd z Warszawy ulicą Józefa Piłsudskiego',
    },
    {
      text: 'Komunikacja miejska: Autobus 245 - nalezy wysiąść na przystanku Ząbki Dzika',
    },
  ];

  const contactInfo = [
    {
      title: 'Adres',
      text: (
        <>
          Centrum Rozwoju Dziecka "Zgrane Dzieciaki"
          <br /> ul. Kościelna 9 05-091 Ząbki
        </>
      ),
      icon: <FaMapMarkerAlt className="text-blue-500 text-xl mt-1" />,
    },
    {
      title: 'Telefon',
      text: '(+48) 691-031-311',
      icon: <FaPhone className="text-blue-500 text-xl mt-1" />,
    },
    {
      title: 'E-mail',
      text: 'gabinet@zgranedzieciaki.pl',
      icon: <FaEnvelope className="text-blue-500 text-xl mt-1" />,
    },
    {
      title: 'Dane do przelewu',
      text: (
        <>
          Julitta Janiak
          <br />
          Nr konta: XX XXXX XXXX XXXX XXXX XXXX XXXX
        </>
      ),
      icon: <FaMoneyBillWave className="text-blue-500 text-xl mt-1" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumbs />

      <div className="mb-12">
        <img
          src={mapImage}
          alt="Mapa dojazdu"
          className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <QuickInfoBanner contentItems={contactInfo} title="Informacje kontaktowe" />

        <QuickInfoBanner
          contentItems={contentItems}
          children={<FaDirections className="text-blue-500 text-2xl" />}
          title="Jak do nas trafić?"
        />
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" id="map-section">
          Nasza lokalizacja
        </h2>
        <div className="h-[400px] rounded-lg overflow-hidden shadow-lg z-0">
          <MapContainer
            center={position}
            zoom={15}
            style={{ height: '100%', width: '100%', zIndex: 0 }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={defaultIcon}>
              <Popup>
                Centrum Rozwoju Dziecka „Zgrane Dzieciaki"
                <br />
                ul. Kościelna 9<br />
                05-091 Ząbki
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
