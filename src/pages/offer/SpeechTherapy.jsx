import Breadcrumbs from '../../components/Breadcrumbs';
import { FaComments, FaCheck } from 'react-icons/fa';
import logopedaImage from '../../assets/Logopeda.png';

const SpeechTherapy = () => {
  const services = [
    'terapię logopedyczną dla dzieci od 2 roku życia z opóźnieniem rozwoju mowy, wadami wymowy, zaburzeniami rozwoju mowy dostosowaną do wieku i indywidualnych możliwości dziecka',
    'konsultacje logopedyczne dla rodziców mających wątpliwości, co do rozwoju mowy swoich dzieci',
  ];

  const ageGroups = [
    {
      age: '2 lat',
      symptoms: [
        'nie mówi w ogóle lub posługuje się pojedynczymi słowami, bądź sylabami i wyrażeniami dźwiękonaśladowczymi',
        'niechętnie nawiązuje kontakt werbalny i wzrokowy',
        'jego mowa jest niezrozumiała przez otoczenie',
        'nie rozumie kierowanych do niego prostych poleceń słownych',
      ],
    },
    {
      age: '3 lat',
      symptoms: [
        'wymawia pojedyncze dźwięki lub słowa, nie buduje prostych zdań',
        'jego wypowiedzi są niezrozumiałe dla otoczenia',
        'ma niepłynność mowy',
        'nie rozumie kierowanych do niego poleceń',
        'przy wymawianiu głosek: t, d, n, l, ś, ź, ć, dź układa język między zębami',
        'zamiast głosek: k, g wymawia głoski: t, d',
      ],
    },
    {
      age: '4 lat',
      symptoms: [
        'nie posługuje się zdaniem, tylko pojedynczymi słowami',
        'nie rozumie poleceń słownych',
        'nie wymawia głosek: l, f, w, k, g, s, z, c, dz i zamienia je odpowiednio na głoski: j, p, b, t, d, ś, ź, ć, dź',
        'ubezdźwięcznia głoski dźwięczne (np. zamiast woda mówi fota)',
        'układa język między zębami podczas wymawiania głosek: l, t, d, n, ś, ź, ć, dź, s, z, c, dz',
        'ma niepłynność mowy',
      ],
    },
    {
      age: '5 lat',
      symptoms: [
        'nie wymawia głosek sz, ż, cz, dż',
        'głoskę r zamienia na j,ł bądź wymawia ją gardłowo',
        'układa język między zębami (jak u 4-latka) + przy sz, ż, cz, dż',
        'nadmiernie upraszcza, skraca lub przestawia sylaby w wyrazie',
        'nie rozumie i nie posługuje się wyrażeniami przyimkowymi',
        'nie buduje dłuższych wypowiedzi',
        'ma niepłynność mowy',
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs />

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-500 text-white px-6 py-8 text-center">
          <FaComments className="text-5xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Logopedia</h1>
        </div>

        {/* Image Section */}
        <div className="p-6">
          <img
            src={logopedaImage}
            alt="Logopedia"
            className="w-full h-[300px] object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Introduction */}
        <div className="p-6 space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold text-gray-900">Kiedy zgłosić się do logopedy?</h2>
          <p>
            Najprostsza odpowiedź na to pytanie: zawsze, gdy coś w rozwoju mowy dziecka nas martwi.
            Logopeda jest specjalistą w dziedzinie rozwoju mowy. To logopeda orzeka o tym, czy
            rozwój mowy dziecka przebiega prawidłowo, bądź nieprawidłowo i czy dziecko wymaga
            terapii.
          </p>
        </div>

        {/* Services */}
        <div className="bg-gray-50 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            W naszym gabinecie oferujemy:
          </h2>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Age Groups */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            A więc Rodzicu zgłoś się do specjalisty, jeśli Twoje Dziecko:
          </h2>
          <div className="space-y-8">
            {ageGroups.map((group, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">W wieku {group.age}:</h3>
                <ul className="space-y-3">
                  {group.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-blue-500 font-bold min-w-[24px]">•</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gray-50 p-6 text-center">
          <p className="text-lg font-semibold text-blue-600">
            Zapraszamy do kontaktu i współpracy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpeechTherapy;
