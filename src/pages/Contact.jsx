import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import mapImage from '../assets/Mapa.png';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaMoneyBillWave, FaDirections } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import ContactForm from '../components/ContactForm';

// Fix for default marker icon
const defaultIcon = new Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Contact = () => {
  // Coordinates for Ząbki, ul. Kościelna 9
  const position = [52.27831114831534, 21.12762613481187];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumbs />

      {/* Map Image */}
      <div className="mb-12">
        <img
          src={mapImage}
          alt="Mapa dojazdu"
          className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Informacje kontaktowe</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Adres</h3>
                <p className="text-gray-600">
                  Centrum Rozwoju Dziecka "Zgrane Dzieciaki"
                  <br />
                  ul. Kościelna 9<br />
                  05-091 Ząbki
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaPhone className="text-blue-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Telefon</h3>
                <p className="text-gray-600">691-031-311</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="text-blue-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">gabinet@zgranedzieciaki.pl</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaMoneyBillWave className="text-blue-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Dane do przelewu</h3>
                <p className="text-gray-600">
                  Julitta Janiak
                  <br />
                  Nr konta: XX XXXX XXXX XXXX XXXX XXXX XXXX
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <FaDirections className="text-blue-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-900">Jak do nas trafić</h2>
          </div>

          <div className="text-gray-600 space-y-4">
            <p>Znajdujemy się w centrum Ząbek, w bliskiej odległości od stacji PKP Ząbki.</p>
            <p>Dojazd samochodem: Najlepszy dojazd z Warszawy ulicą Józefa Piłsudskiego</p>
            <p>Komunikacja miejska: Autobus 245 - nalezy wysiąść na przystanku Ząbki Dzika</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
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
