import Breadcrumbs from '../components/Breadcrumbs';
import puzzleImage from '../assets/Puzzle.jpg';
import { FaUserMd, FaListUl, FaUsers } from 'react-icons/fa';
import HeroBanner from '../components/HeroBanner';

const About = () => {
  const services = [
    'Diagnoza i terapia integracji sensorycznej',
    'Konsultacja, diagnoza i terapia logopedyczna',
    'Terapia Ręki',
    'Konsultacja psychologiczna',
    'Trening Umiejętności Społecznych',
    'Aktywny trening słuchowy Neuroflow',
    'Terapia pedagogiczna',
    'Korektywa i kompensacja wad postawy',
  ];

  const team = [
    {
      name: 'Julitta Janiak',
      roles: [
        'pedagog',
        'terapeuta integracji sensorycznej',
        'terapeuta met. Warnkego',
        'provider Neuroflow',
      ],
    },
    {
      name: 'Anna Krasnodębska',
      roles: ['oligofrenopedagog', 'terapeuta integracji sensorycznej', 'terapeuta TUS'],
    },
    {
      name: 'Justyna Adamczyk',
      roles: ['pedagog specjalny', 'neurobiolog', 'terapeuta integracji sensorycznej'],
    },
    {
      name: 'Anna Gajowiec',
      roles: ['fizjoterapeuta', 'terapeuta integracji sensorycznej', 'instruktor korektywy'],
    },
    {
      name: 'Martyna Masiulaniec',
      roles: ['pedagog', 'terapeuta integracji sensorycznej'],
    },
    {
      name: 'Magdalena Raczyńska',
      roles: ['pedagog', 'terapeuta ręki i logopeda', 'terapia pedagogiczna'],
    },
    {
      name: 'Monika Murawiecka',
      roles: ['pedagog', 'logopeda'],
    },
    {
      name: 'Anna Żmijewska',
      roles: ['pedagog', 'terapia pedagogiczna'],
    },
    {
      name: 'Rafał Sawicki',
      roles: ['psycholog', 'terapeuta TUS'],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumbs />

      {/* Hero Image */}
      <HeroBanner image={puzzleImage} color={'bg-gradient-to-t from-gray-500/80 to-transparent'} />

      {/* About Section */}
      <section className="mb-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <FaUserMd className="text-blue-500" />O NAS
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <p className="text-gray-600 leading-relaxed mb-8">
            Witamy na stronie Centrum Rozwoju Dziecka Zgrane Dzieciaki w Ząbkach (wcześniej
            Małolat). Mamy przyjemność współpracować z Państwem już od 2010 roku. Specjalizujemy się
            w diagnozie i terapii integracji sensorycznej, ale również pomagamy dzieciom z
            problemami logopedycznymi, przetwarzania słuchowego, dysleksją, wadami postawy.
            Zapraszamy dzieci w każdym wieku!
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <FaListUl className="text-blue-500" />W naszej ofercie znajdują się:
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <FaUsers className="text-blue-500" />
          NASZ ZESPÓŁ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{member.name}</h3>
              <ul className="space-y-1">
                {member.roles.map((role, roleIndex) => (
                  <li key={roleIndex} className="text-gray-600 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
