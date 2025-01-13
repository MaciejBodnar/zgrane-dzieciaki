import Breadcrumbs from '../../components/Breadcrumbs';
import { FaHandHoldingMedical, FaCheck, FaTimes } from 'react-icons/fa';
import glowaImage from '../../assets/Glowa.jpg';

const CranialTherapy = () => {
  const indications = [
    'bólach głowy, w tym migrenach',
    'bólach kręgosłupa',
    'bólach niewiadomego pochodzenia',
    'zaburzeniach menstruacji i bólach piersi przed menstruacją',
    'skoliozach i wadach postawy',
    'nadpobudliwości u dzieci',
    'nocnym moczeniu u dzieci',
    'zaburzeniach koncentracji',
    'zaburzeniach snu',
    'zaburzeniach takich jak: dysleksje, tiki, jąkanie się',
    'nerwicy',
    'depresji',
    'traumach związanych z trudnym porodem',
    'autyzmie',
    'trudnościach dzieci w uczeniu się',
    'alergiach',
    'nietolerancjach pokarmowych',
    'dla kobiet w ciąży może być przydatna jako przygotowanie do porodu',
  ];

  const contraindications = [
    'zapalenie opon mózgowych w ostrym stanie',
    'guzy występujących w czaszce',
    'tętniaki',
    'udar mózgu w początkowej fazie',
    'wodogłowie bezkomorowym',
    'wysoka temperaturze',
    'świeże urazy ortopedyczne do 48 godzin',
    'niewygojone rany czaszki',
    'ostre stany zapalne np. stawów',
    'choroby psychiczne (schizofrenia, psychoza maniakalno-depresyjna)',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs />

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-500 text-white px-6 py-8 text-center">
          <FaHandHoldingMedical className="text-5xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Terapia Czaszkowo-Krzyżowa</h1>
        </div>

        {/* Image Section */}
        <div className="p-6">
          <img
            src={glowaImage}
            alt="Terapia czaszkowo-krzyżowa"
            className="w-full h-[300px] object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Introduction */}
        <div className="p-6 space-y-6 text-gray-700 leading-relaxed">
          <p>
            Terapia czaszkowo-krzyżowa jest jedną z metod terapii manualnej, blisko spokrewniona z
            osteopatią. Wpływa na zmniejszenie napięcia struktur łączno-tkankowych, regulację
            przepływu płynu mózgowo-rdzeniowego, mobilność kości czaszki i kości krzyżowej,
            Oddziałując holistycznie na nasze ciało pomaga zrównoważyć aktywność układu nerwowego,
            zmniejszyć ból, napięcia, blokady, stres – działa na ciało, jak i sferę emocjonalną.
          </p>
          <p>
            W organizmie ludzkim obok rytmów bicia serca i oddechu istnieje jeszcze jeden rytm, w
            którym porusza się płyn mózgowo-rdzeniowy. Specyficzny ruch związany z produkcją i
            absorpcją płynu mózgowo-rdzeniowego ma wpływ na zachowanie równowagi pomiędzy układem
            nerwowym, trzewnym i hormonalnym. Prawidłowy rytm odpowiada także za regenerację całego
            organizmu – napięcia w oponach czaszkowych oddziałują bowiem na system
            mięśniowo-powięziowy ciała. Czasem ten przepływ ulega zablokowaniu, co w konsekwencji
            może powodować objawy somatyczne, jak napięcia, bóle, lub emocjonalne – brak energii do
            życia. U dzieci może to prowadzić do rozmaitych zaburzeń i dysfunkcji w rozwoju
            psychomotorycznym, poznawczym i emocjonalnym.
          </p>
          <p>
            Celem terapii jest, poprzez świadomy dotyk wzmacnianie naturalnego rytmu i usunięcie
            blokad w przepływie płynu mózgowo-rdzeniowego. Terapeuta pracuje w sposób nieinwazyjny,
            posługując się bardzo delikatnym dotykiem – tzw. motylkowym – którego siłę nacisku
            szacuje się na ok. 5 gram. Te niezwykle subtelne techniki oddziałują na funkcje układu
            kraniosakralnego, a tym samym na funkcjonowanie układu nerwowego, mięśniowego,
            powięziowego, endokrynologicznego, limfatycznego, pokarmowego, oddechowego, a nawet
            kostnego. Terapia ta jest całkowicie bezpieczna zarówno dla dzieci, kobiet w ciąży oraz
            osób starszych.
          </p>
        </div>

        {/* Indications */}
        <div className="bg-gray-50 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Terapia czaszkowo-krzyżowa polecana jest przy:
          </h2>
          <ul className="space-y-3">
            {indications.map((indication, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>{indication}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contraindications */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Przeciwwskazania:</h2>
          <ul className="space-y-3">
            {contraindications.map((contraindication, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <FaTimes className="text-red-500 mt-1 flex-shrink-0" />
                <span>{contraindication}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* How it looks */}
        <div className="bg-gray-50 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Jak to wygląda?</h2>
          <p className="text-gray-700 leading-relaxed">
            W trakcie terapii pacjent leży na plecach, w ubraniu. Mimo, że ta forma terapii nie
            wymaga bezpośredniego kontaktu ze skórą pacjenta, zalecana jest dla pacjenta luźna, nie
            krępująca ruchów odzież. W czasie zabiegu terapeuta stosuje konkretne układy
            terapeutyczne. Dzięki delikatnemu dotykowi motylkowemu możliwe jest rozluźnienie tkanek
            miękkich i kostnych w obrębie układu czaszkowo-krzyżowego (czaszki, kręgosłupa i kości
            krzyżowej).
          </p>
        </div>

        {/* What to expect */}
        <div className="p-6 bg-blue-50">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Czego mogę się spodziewać w trakcie i po zabiegu?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Pacjent po zabiegu często jest wypoczęty i rozluźniony. Jeśli w czasie sesji następuje
            uwolnienie traumatycznego przeżycia, w zależności od indywidualnych uwarunkowań terapii
            mogą towarzyszyć mimowolne ruchy ciała, drgania, zmiany rytmu oddechowego, reakcje
            emocjonalne typu śmiech, płacz, uczucie zimna lub gorąca. Równie dobrze może się
            zdarzyć, że pacjent nie będzie odczuwał dodatkowych wrażeń, co nie oznacza, że terapia
            nie działa. Należy pamiętać, że każdy pacjent reaguje na swój sposób i na poprawę
            kondycji psychosomatycznej można liczyć po serii spotkań z terapeutą.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CranialTherapy;
