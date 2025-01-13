import Breadcrumbs from '../../components/Breadcrumbs';
import { FaHeadphones, FaCheck } from 'react-icons/fa';
import usmiechImage from '../../assets/Usmiech.jpg';

const Neuroflow = () => {
  const benefits = [
    'różnicowanie dźwięków mowy, naukę czytania i pisania, naukę języków obcych',
    'utrzymanie uwagi na głosie nauczyciela w szumie i hałasie',
    'podzielność uwagi, gdy jednocześnie mówi kilka osób',
    'wydłuża pamięci słuchową',
    'rozwija mowę, prawidłową artykulację i melodię języka',
  ];

  const symptoms = [
    'Opóźniony rozwój mowy',
    'Częste zachorowania na przewlekłe zapalenia ucha środkowego (w tym wysiękowe) lub na ostre zapalenia ucha, przerośnięty migdałek gardłowy',
    'Ograniczone rozumienie mowy nasilające się w trudnych warunkach akustycznych (np. hałas), trudność w rozumieniu długich i złożonych pytań/poleceń, mylenie podobnie brzmiących wyrazów',
    'Zaburzona intonacja (mowa monotonna, cicha lub zbyt głośna)',
    'Nadwrażliwość na dźwięki, zmęczenie po przebywaniu w głośnym środowisku',
    'Zaburzona koncentracja, krótka zdolność utrzymywania uwagi',
    'Zwracanie uwagi na bodźce, które nie są istotne',
    'Nadmierna potrzeba hałasowania',
    'Osłabiona pamięć słuchowa',
    'Błędy ortograficzne typu słuchowego',
    'Trudności z konstruowaniem płynnych wypowiedzi, ubogie słownictwo',
    'Trudności w nauce języków obcych',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs />

      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="bg-blue-500 text-white px-6 py-8 text-center">
          <FaHeadphones className="text-5xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Neuroflow® – Aktywny Trening Słuchowy</h1>
        </div>

        {/* Image Section */}
        <div className="p-6">
          <img
            src={usmiechImage}
            alt="Uśmiechnięte dziecko"
            className="w-full h-[300px] object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Introduction */}
        <div className="p-6 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            <strong>Pierwszy w Polsce interaktywny trening wyższych funkcji słuchowych</strong> dla dzieci z
            zaburzeniami przetwarzania słuchowego (centralnymi zaburzeniami słuchu) oraz dzieci z
            grupy ryzyka tych zaburzeń od 4 roku życia. Trening Neuroflow® prowadzony jest on-line
            i jest dostępny na platformie internetowej. Dostęp do platformy można uzyskać po
            przebyciu diagnozy w jednym z certyfikowanych ośrodków Neuroflow®.
          </p>

          <p className="text-gray-700 leading-relaxed">
          Neuroflow® jest jednym z nielicznych treningów wyższych funkcji słuchowych opracowanym na podstawie najnowszych osiągnięć naukowych z tej dziedziny. Program ćwiczeń pozwala na dostosowanie ich tempa oraz stopnia trudności do potrzeb dziecka i możliwości rodziców – trening prowadzony może być w domu pacjenta, pod kontrolą rodzica lub w gabinecie terapeuty. Stopień trudności zadań dostosowywany jest do możliwości dziecka i zmienia się w sposób adaptacyjny, tak aby zadanie nie było zbyt łatwe, ani zbyt trudne. Trening słuchowy składa się z modułów, które odpowiadają potrzebom każdego z typów klinicznych zaburzeń przetwarzania słuchowego. Program jest dostosowany do kilku poziomów rozwojowych, od wieku przedszkolnego do młodzieży. Dostępny jest również trening słuchowy dla dorosłych.
          </p>
        </div>

        {/* Symptoms Section */}
        <div className="bg-gray-50 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Objawy centralnych zaburzeń przetwarzania słuchowego:
          </h2>
          <ul className="space-y-3">
            {symptoms.map((symptom, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <span className="min-w-[24px] h-6 flex items-center justify-center bg-blue-500 text-white rounded-full text-sm">
                  {index + 1}
                </span>
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Training Description */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Przebieg treningu</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
          Każdy etap treningu słuchowego poprzedzony jest diagnozą przeprowadzaną w certyfikowanym ośrodku Neuroflow®, na podstawie której przygotowywany jest indywidualny program ćwiczeń. Sesje treningowe odbywają się 3 razy w tygodniu, przy czym każda z nich trwa ok. 20-25 min. Trzy etapy ćwiczeń słuchowych trwają około 8 miesięcy. W dniach, kiedy dziecko nie wykonuje sesji słuchowych, realizuje ćwiczenia utrwalające schemat ciała, orientację w przestrzeni, ćwiczenia równoważne, koordynacji słuchowo-wzrokowo-ruchowej oraz ćwiczenia ruchowe połączone ze stymulacją wyższych funkcji słuchowych.


          </p>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Korzyści z treningu Neuroflow®
          </h2>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <FaCheck className="text-blue-500 mt-1 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Neuroflow;
