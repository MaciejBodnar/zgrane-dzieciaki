import Box from '../components/Box';
import tusImage from '../assets/Tus.png';
import papieroweLudkiImage from '../assets/PapieroweLudki.jpg';
import { FaPeopleCarry } from 'react-icons/fa';
import Breadcrumbs from '../components/Breadcrumbs';

const Sensory = () => {
  const skills = [
    'wyrażania siebie i swojego zdania w sposób akceptowalny społecznie',
    'nauki radzenia sobie ze stresem, sytuacjami trudnymi i konfliktowymi',
    'identyfikowania swoich emocji i panowania nad nimi',
    'wzmacniania poczucia swojej wartości, odkrywania swoich mocnych i słabych stron',
    'współpracy z grupą rówieśniczą i pozytywnych relacji koleżeńskich',
    'uczą się zachowania adekwatnego do sytuacji w życiu codziennym',
    'inicjowania rozmowy i podtrzymywania jej',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs />
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-500 text-white px-6 py-8 text-center">
          <FaPeopleCarry className="text-5xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Trening umiejętności społecznych</h1>
        </div>

        {/* Main Image */}
        <div className="p-6">
          <img
            src={tusImage}
            alt="Trening umiejętności społecznych"
            className="w-full h-[300px] object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Box */}
        <Box className="m-6">
          <div className="md:flex gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                TRENING UMIEJĘTNOŚCI SPOŁECZNYCH (TUS)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To grupowe zajęcia skierowane do dzieci z trudnościami w zachowaniu, nieśmiałych,
                wycofanych, lękliwych, mających problemy w nawiązaniu prawidłowych kontaktów z
                rówieśnikami, ale również dla dzieci z Zespołem Aspergera, autyzmem, dominujących i
                buntowniczych, mających duże trudności z przestrzeganiem norm społecznych.
              </p>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <img
                src={papieroweLudkiImage}
                alt="Papierowe ludki"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </Box>

        {/* Skills Section */}
        <div className="bg-gray-50 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Podczas zajęć dzieci uczą się:
          </h2>
          <div className="grid gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-blue-500 font-bold text-xl">•</span>
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Description Box */}
        <Box className="m-6">
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              Zajęcia odbywają się co tydzień w małych, kameralnych grupach i trwają 60 lub 90 min.
              Podczas zajęć wykorzystywane są elementy dramy, zajęć teatralnych, muzykoterapii,
              elementy zajęć wg Metody Ruchu Rozwijającego Weroniki Scherborne.
            </p>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Sensory;
