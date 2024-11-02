import Box from '../components/Box';
import integracjaImage from '../assets/IntegracjaSensoryczna.png';
import { FaBrain } from 'react-icons/fa';
import Breadcrumbs from '../components/Breadcrumbs';

const Study = () => {
  const symptoms = [
    'Jest nadruchliwe, nie może usiedzieć w jednym miejscu',
    'Ma trudności z uwagą i koncentracją',
    'Często się potyka, wpada na przedmioty, meble, przewraca się',
    'Nie lubi gdy ktoś blisko niego siada',
    'Przejawia duży lęk przed upadkiem, wysokością',
    'Ma kłopoty z samodzielnym ubieraniem się, zapinaniem guzików, suwaków',
    'W dziwny sposób trzyma narzędzia i przybory (sztućce, nożyczki, kredkę)',
    'Porusza się raczej powoli i ostrożnie albo zbyt szybko i ryzykownie',
    'Brzydko pisze, słabiej niż rówieśnicy rysuje, ma problemy z czytaniem, liczeniem, „gubi" litery podczas przepisywania z tablicy/książki',
    'Szybko się męczy, nie może ustać, podpiera głowę podczas pisania lub rysowania',
    'Nie pokonuje przeszkód w terenie – raczej je omija',
    'Ma opóźniony rozwój mowy',
    'Nie lubi mycia głowy, obcinania paznokci, smarowania twarzy kremem',
    'Jest niezgrabny ruchowo',
    'Chodzi na palcach',
    'Nabycie nowej umiejętności wymaga wielu powtórzeń i prób',
    'Nie lubi baraszkowania, przytulania',
    'Źle się czuje lub zachowuje inaczej w większych skupiskach ludzi',
    'Nie lubi nowych potraw, ma odruch wymiotny na niektóre z nich',
    'Pierwszy wyczuwa, że coś brzydko pachnie',
    'Nie lubi zabaw w naśladowanie, tańców',
    'Zatyka uszy na niektóre dźwięki, nie lubi hałasu',
    'Niechętnie bierze udział w grach i zabawach z rówieśnikami',
    'Bywa uparty, agresywny z niewiadomych powodów, często się obraża',
    'Ma chorobę lokomocyjną',
    'Ma problemy z łapaniem i rzucaniem piłki',
    'Nie lubi określonych materiałów, ubrań, nie lubi się przebierać',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs />
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-500 text-white px-6 py-8 text-center">
          <FaBrain className="text-5xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Integracja Sensoryczna</h1>
        </div>

        {/* Image Section */}
        <div className="p-6">
          <img
            src={integracjaImage}
            alt="Integracja Sensoryczna"
            className="w-full h-[300px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Box */}
        <Box className="m-6">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">ZMYSŁY….</h2>
          <p className="text-xl text-center font-semibold text-gray-700 mb-8">
            Zgrane, zestrojone, zintegrowane. Chcielibyśmy, aby takie były. DLACZEGO?
          </p>
          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-lg">
                Proces integracji sensorycznej jest bardzo złożony, ale też niezbędny do naszego
                codziennego funkcjonowania. Pozwala nam odnaleźć się w złożonej rzeczywistości i
                odpowiednio na nią odpowiadać.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Współpraca zmysłów</h3>
                <p>
                  Kiedy pracujemy, bawimy się, uczymy, odpoczywamy, bądź jesteśmy w ruchu, nasz
                  układ nerwowy nieustannie odbiera i organizuje wrażenia z różnych zmysłów
                  segregując je, łącząc ze sobą, wzmacniając lub hamując. Reakcje na bodźce z
                  zewnątrz powinny być jak najbardziej optymalne, dlatego nasze systemy sensoryczne
                  współpracują, wspierają się wzajemnie i wpływają na siebie.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Podstawowe zmysły</h3>
                <p>
                  Myśląc o zmysłach przychodzą nam do głowy dotyk, słuch, wzrok, smak i węch. Jednak
                  dwa inne układy – przedsionkowy i proprioceptywny – mają fundamentalne znaczenie
                  dla naszego funkcjonowania.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Układ przedsionkowy</h3>
              <p>
                Układ przedsionkowy reaguje na ruch i zmianę położenia naszego ciała w przestrzeni.
                Jako pierwszy dojrzewa już w okresie prenatalnym. Potocznie zwany jest zmysłem
                równowagi, choć równowaga to już umiejętność wytrenowana, w oparciu o informacje z
                układu przedsionkowego, właśnie poprzez ruch. Daje nam poczucie bezpieczeństwa przez
                ciągłe przetwarzanie informacji gdzie jesteśmy, jak się przemieszczamy.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">
                Znaczenie integracji sensorycznej
              </h3>
              <p>
                Wraz z informacjami z propriocepcji (czucia głębokiego) i dotyku pozwala nam
                zbudować prawidłowy schemat naszego ciała. Ten z kolei jest niezbędny do wykonywania
                precyzyjnych ruchów, opracowania planu motorycznego i wykonanie tego czego chcemy…
                Prawidłowo zintegrowane wrażenia z różnych systemów sensorycznych (począwszy od
                odbioru, poprzez przetwarzanie informacji sensorycznej na różnych poziomach układu
                nerwowego) są podstawą rozwoju ruchowego, kształtowania mowy, rozwoju emocjonalnego
                (w tym budowanie poczucia własnej wartości) i społecznego każdego dziecka.
              </p>
            </div>
          </div>
        </Box>

        {/* Problems Section */}
        <div className="bg-gray-50 p-6">
          <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
            CO JEDNAK GDY TE UKŁADY NIE DZIAŁAJĄ JAK TRZEBA?
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-inner text-gray-700 italic text-lg leading-loose text-center">
            Jazda na rowerze jest zbyt trudna, nie da się włożyć tych rajstop…. ciągle wychodzę poza
            linię….. nie lubię gdy mnie ktoś dotyka….. uwieeelbiam się kręcić….. JEST TU ZBYT GŁOŚNO
            I NIE ROZUMIEM CO MÓWI TATA….. juhuu! Ale jazda!!…. nie wiem dlaczego, ale jestem
            straaasznie zły….. ta zjeżdżalnia jest za wysoka….. NIE ZNOSZĘ RYTMIKI….. ciekawe czy
            uda mi się zeskoczyć z najwyższego szczebla… ooo niee! Znowu tyle pisania….
          </div>
        </div>

        {/* Symptoms Section */}
        <div className="p-6">
          <p className="text-gray-700 mb-6">
            Zaburzenia integracji sensorycznej mają wpływ na zachowanie, koncentrację uwagi,
            zdobywanie nowych umiejętności motorycznych, uczenie się złożonych czynności (jak
            pisanie, czytanie). Jeśli obserwujecie Państwo u swoich dzieci kilka z poniższych
            objawów, bądź niepokoją Państwa pewne zachowania czy reakcje dziecka, warto
            przeprowadzić diagnozę integracji sensorycznej, która pozwoli znaleźć przyczyny i ocenić
            w jakich obszarach Wasze dziecko wymaga wsparcia.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {symptoms.map((symptom, index) => (
              <div key={index} className="flex items-start gap-3 text-gray-700">
                <span className="text-blue-500 font-bold min-w-[24px]">•</span>
                <span>{symptom}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Therapy Description */}
        <Box className="m-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cel i przebieg terapii SI</h2>
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p>
              Głównym celem terapii SI jest dostarczanie w odpowiedni sposób kontrolowanej ilości
              bodźców sensorycznych i w konsekwencji usprawnianie ich integracji. Podczas terapii SI
              dziecko nie uczy się konkretnych umiejętności, lecz poprawiając odbiór i przetwarzanie
              wrażeń sensorycznych, wzmacnia procesy nerwowe leżące u ich podstaw. Terapia SI odbywa
              się w specjalnie do tego celu przygotowanych i wyposażonych salach. Ćwiczenia
              stosowane podczas terapii są dostosowane do poziomu rozwojowego dziecka, ale powinny
              być dla niego wyzwaniem. Wtedy pełnią stymulującą rolę dla mózgu i znacząco poprawiają
              organizację układu nerwowego. Razem z dzieckiem terapeuta pokonuje jego lęki, blokady,
              odpowiednio dobiera stymulacje by zmniejszyć nadwrażliwości lub pobudzić do działania.
            </p>
          </div>
        </Box>

        {/* Conclusion */}
        <div className="p-6 bg-blue-50 text-center">
          <p className="text-xl font-semibold text-blue-600">A efekt to zgrane dziecko! 🙂</p>
        </div>
      </div>
    </div>
  );
};

export default Study;
