import Breadcrumbs from '../../components/Breadcrumbs';
import { FaHandPaper, FaExclamationCircle } from 'react-icons/fa';
import raczkaImage from '../../assets/Raczka.jpg';

const HandTherapy = () => {
  const mainIndications = [
    'trudności manualne (widoczne podczas malowania, wycinania, lepienia, rzeźbienia, wydzierania)',
    'wolne tempo uczenia się nowych czynności motorycznych',
    'trudności grafomotoryczne (niski poziom graficzny rysunków, szlaczków, wzorów, figur)',
    'obniżony poziom graficzny pisma (pismo niekształtne, nieprecyzyjne, mało czytelne, niestaranne, zaburzone proporcje liter)',
    'wolne tempo pracy',
    'wyraźne obniżenie lub podwyższenie napięcia mięśniowego w obrębie kończyny górnej i obręczy barkowej',
    'zachowanie nieprawidłowej postawy podczas pracy przy stoliku',
    'niewłaściwy chwyt pisarski',
    'problemy z nauką przedmiotów szkolnych, których opanowanie wymaga sprawności motorycznej, manualnej, czy rysunkowej',
    'problemy z koordynacją obu rąk podczas wykonywania czynności manipulacyjnych',
  ];

  const additionalIndications = [
    'kłopoty w czynnościach samoobsługowych',
    'zaburzenia koordynacji wzrokowo-ruchowej',
    'nieprawidłowa postawa ciała',
    'zaburzona lateralizacja',
    'kłopoty ze skupieniem uwagi',
    'zaburzenia praksji (zdolność wykonywania ruchów celowych)',
    'słaba świadomość własnego ciała',
    'niechęć do dotykania różnych faktur',
    'brak motywacji i niechęć do aktywności grafomotorycznej',
    'zbyt wolne lub zbyt szybkie wykonywanie różnych czynności manualnych, co prowadzi do niestaranności',
    'osłabione mechanizmy równoważne, niezgrabność ruchową, brak koordynacji ruchowej',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs />

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-500 text-white px-6 py-8 text-center">
          <FaHandPaper className="text-5xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Terapia Ręki</h1>
        </div>

        {/* Image Section */}
        <div className="p-6">
          <img
            src={raczkaImage}
            alt="Terapia ręki"
            className="w-full h-[300px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Introduction */}
        <div className="p-6 space-y-6 text-gray-700 leading-relaxed">
          <p>
            Ręka to niezwykle wyspecjalizowany narząd. Zbudowana z kości, drobnych stawów i więzadeł
            tworzy precyzyjne narzędzie, które codziennie wykonuje tysiące drobnych ruchów. Rola
            ręki widoczna jest w obszarze samoobsługi, komunikacji, w nauce i zabawie. Ręce są
            jednym z najcenniejszych narzędzi poznania świata! Kończyna górna nie pracuje jednak w
            odosobnieniu, a w połączeniu z tułowiem, wzrokiem, słuchem, dotykiem.
          </p>
          <p className="text-lg font-semibold text-blue-600 text-center italic">
            Śmiało można powiedzieć, że sprawność rąk znacząco wpływa na poziom funkcjonowania
            człowieka i jego samodzielność.
          </p>
        </div>

        {/* Therapy Description */}
        <div className="bg-gray-50 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Na czym polega terapia ręki?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Terapia ręki to jedna z metod wspomagających rozwój dziecka. Podczas zajęć angażujemy
            całe ciało, stymulujemy bazowe systemy sensoryczne (propriocepcję, dotyk, równowagę),
            wzmacniamy całą kończynę górną i budujące ją struktury, wykonujemy ćwiczenia manualne,
            manipulacyjne i precyzyjne, a na końcu także graficzne. Usprawniamy także współpracę
            oko-ręka, rozwijamy umiejętności planowania ruchu, wspomagamy czucie głębokie oraz
            powierzchniowe, ćwiczymy świadomość ciała.
          </p>
        </div>

        {/* Main Indications */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Wskazania do terapii ręki:</h2>
          <ul className="space-y-3">
            {mainIndications.map((indication, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <FaExclamationCircle className="text-blue-500 mt-1 flex-shrink-0" />
                <span>{indication}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Indications */}
        <div className="bg-gray-50 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">A także:</h2>
          <ul className="space-y-3">
            {additionalIndications.map((indication, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <FaExclamationCircle className="text-blue-500 mt-1 flex-shrink-0" />
                <span>{indication}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Conclusion */}
        <div className="p-6 bg-blue-50">
          <p className="text-gray-700 leading-relaxed mb-4">
            Zapraszamy do kontaktu rodziców, którzy zauważają trudności manualne u swoich pociech.
          </p>
          <p className="text-gray-700 leading-relaxed font-semibold">
            W skutecznej terapii ręki kluczową rolę odgrywa szybkie dostrzeżenie symptomów i
            kłopotów dziecka oraz dobór właściwych metod terapeutycznych.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HandTherapy;
