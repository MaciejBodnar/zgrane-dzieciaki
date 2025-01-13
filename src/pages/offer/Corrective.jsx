import Breadcrumbs from '../../components/Breadcrumbs';
import { FaWalking, FaCheck } from 'react-icons/fa';
import korektywaPrimaryImage from '../../assets/Korektywa.png';
import korektywaSecondaryImage from '../../assets/Korektywa2.jpg';

const Corrective = () => {
  const services = [
    'korektywa i kompensacja wad postawy',
    'ćwiczenia ogólnorozwojowe (kształtowanie prawidłowej postawy ciała, edukacja posturalna)',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs />

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-500 text-white px-6 py-8 text-center">
          <FaWalking className="text-5xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Korektywa</h1>
        </div>

        {/* Primary Image Section */}
        <div className="p-6">
          <img
            src={korektywaPrimaryImage}
            alt="Korektywa"
            className="w-full h-[300px] object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Main Content with Side Image */}
        <div className="p-6">
          <div className="md:flex gap-8 items-start">
            {/* Text Content */}
            <div className="md:w-2/3 space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Najczęstszym okresem, kiedy powstają wady postawy u naszych pociech jest okres
                szkolny (6-7 lat). Wtedy zmienia się diametralnie tryb ich dotychczasowego życia.
                Związane jest to z przejściem ze swobodnego, indywidualnego regulowanego reżimu
                ruchu w narzucony, kilkugodzinny system przebywania w pozycji siedzącej, często w
                niewłaściwych warunkach.
              </p>
              <p className="text-lg font-semibold text-blue-600">
                Zajęcia z zakresu gimnastyki korekcyjnej mają na celu korygowanie niewłaściwej
                postawy ciała u dzieci poprzez dobór odpowiednich ćwiczeń. Im wcześniej wykryta wada
                tym łatwiejsza terapia dla dziecka.
              </p>
            </div>

            {/* Side Image */}
            <div className="md:w-1/3 mt-6 md:mt-0">
              <img
                src={korektywaSecondaryImage}
                alt="Ćwiczenia korekcyjne"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-gray-50 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Zakres zajęć:</h2>
          <ul className="space-y-4">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-lg">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="p-6 bg-blue-50 text-center">
          <p className="text-lg font-semibold text-blue-600">
            Zapraszamy na konsultacje i zajęcia korekcyjne!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Corrective;
