import {
  FaShieldAlt,
  FaUserLock,
  FaDatabase,
  FaGlobe,
  FaClock,
  FaUserCog,
  FaClipboardCheck,
  FaRobot,
} from 'react-icons/fa';
import Breadcrumbs from '../components/Breadcrumbs';

const Rodo = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
      <Breadcrumbs />
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-500 text-white px-6 py-8 text-center">
          <FaShieldAlt className="text-5xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold">RODO</h1>
          <p className="mt-2 text-blue-100">Informacja o przetwarzaniu danych osobowych</p>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Introduction */}
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed">
              W związku z wejściem w życie Rozporządzenia Parlamentu Europejskiego i Rady (UE)
              2016/679 z dnia 27 kwietnia 2016 r. (dalej: RODO), zgodnie z art. 13 ust. 1 i ust. 2
              RODO, wskazujemy poniżej informacje dotyczące przetwarzania danych osobowych Pana/Pani
              oraz Pana/Pani dziecka/osoby pozostającej pod Pana/Pani opieką.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Administrator */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <FaUserLock className="text-blue-500 text-2xl" />
                <h2 className="text-xl font-semibold text-gray-900">Administrator Danych</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Administratorem danych osobowych jest Julitta Janiak, prowadząca działalność
                gospodarczą pod firmą: Julitta Janiak, nazwa przedsiębiorcy: Centrum Rozwoju Dziecka
                ?Zgrane Dzieciaki?, 05-091 Ząbki, ul. Kościelnej 9, NIP: 7271101952; REGON:
                145828011 (dalej: Administrator lub CRD), z Administratorem można kontaktować się
                telefonicznie: 691-031-311 lub elektronicznie, pod adresem e-mail:
                gabinet@zgranedzieciaki.pl;
              </p>
            </div>

            {/* Cel przetwarzania */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <FaDatabase className="text-blue-500 text-2xl" />
                <h2 className="text-xl font-semibold text-gray-900">Cel Przetwarzania Danych</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Dane osobowe będą przetwarzane w celu realizacji wizyt oraz świadczenia i realizacji
                usług oferowanych przez CRD (m.in. wykonania diagnozy SI oraz przygotowania
                zindywidualizowanego programu terapii) – na podstawie zgody, zgodnie z art. 6 ust. 1
                lit. a oraz art. 9 ust. 2 lit. a RODO, w celu wykonania umowy lub podjęcia działań
                na żądanie osoby, przed zawarciem umowy, zgodnie z art. 6 ust. 1 lit. b RODO, w celu
                rozliczania usług świadczonych przez CRD poprzez wystawianie rachunków/faktur za
                wykonane usługi – na podstawie wykonania obowiązku prawnego ciążącego na
                Administratorze, zgodnie z art. 6 ust. 1 lit. c RODO, a także w celu informacyjnym i
                promocyjnym poprzez umieszczenie danych osobowych w postaci wizerunku dziecka na
                stronie internetowej/portalu społecznościowym CDR ? na podstawie zgody, zgodnie z
                art. 6 ust. 1 lit. a oraz art. 9 ust. 2 lit. a RODO;{' '}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <FaClipboardCheck className="text-blue-500 text-2xl" />
                <h2 className="text-xl font-semibold text-gray-900">Odbiorcy Danych</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Odbiorcami danych będą pracownicy i współpracownicy Administratora oraz podmioty,
                którym Administrator może powierzyć działania wynikające z realizacji celów
                wymienionych w pkt. 2, w tym podmioty świadczące obsługę administracyjną,
                informatyczną, prawną na rzecz CRD, na podstawie umowy powierzenia przetwarzania, a
                także podmioty uprawnione na podstawie przepisów prawa;
              </p>{' '}
            </div>

            {/* Additional sections with icons */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <FaGlobe className="text-blue-500 text-2xl" />
                <h2 className="text-xl font-semibold text-gray-900">Przekazywanie Danych</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Dane osobowe nie będą przekazywane do państwa trzeciego ani organizacji
                międzynarodowej;{' '}
              </p>
            </div>

            {/* Okres przechowywania */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <FaClock className="text-blue-500 text-2xl" />
                <h2 className="text-xl font-semibold text-gray-900">Okres Przechowywania</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Dane osobowe będą przechowywane do czasu wycofania zgody na ich przetwarzanie,
                wtedy, gdy przetwarzane są na podstawie zgody; przez okres niezbędny do wypełnienia
                obowiązków wynikających z przepisów prawa, w tym podatkowego, ciążących na
                Administratorze, wtedy, gdy przetwarzane są na podstawie obowiązku prawnego
                ciążącego na Administratorze; przez okres niezbędny do czasu zakończenia wszelkich
                czynności faktycznych i prawnych niezbędnych do realizacji umowy lub zabezpieczenia
                ewentualnych roszczeń Administratora, gdy przetwarzane są w związku z wykonaniem
                umowy lub podjęciem działań na żądanie osoby, przed zawarciem umowy;{' '}
              </p>
            </div>

            {/* Prawa */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <FaUserCog className="text-blue-500 text-2xl" />
                <h2 className="text-xl font-semibold text-gray-900">Prawa Osoby</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ma Pan/Pani prawo dostępu do treści podanych danych oraz prawo ich sprostowania,
                usunięcia, ograniczenia przetwarzania, prawo do przenoszenia danych, prawo
                wniesienia sprzeciwu, prawo do cofnięcia zgody na ich przetwarzanie; a ponadto prawo
                wniesienia skargi do organu nadzorczego, tj. Prezesa Urzędu Ochrony Danych
                Osobowych, w przypadku uznania, iż przetwarzanie danych osobowych narusza przepisy
                RODO;{' '}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <FaDatabase className="text-blue-500 text-2xl" />
                <h2 className="text-xl font-semibold text-gray-900">Dobrowolność Podania Danych</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Podanie danych osobowych jest dobrowolne, ale konieczne w celu realizacji usług w
                ramach działania CRD, zatem konsekwencją niepodania danych będzie brak możliwości
                wykonania Diagnozy SI oraz przygotowania i przeprowadzenia programu terapeutycznego
                według metody Integracji Sensorycznej;{' '}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <FaRobot className="text-blue-500 text-2xl" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Zautomatyzowane Przetwarzanie
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Administrator nie przetwarza danych osobowych w sposób zautomatyzowany, które
                prowadziłoby do podjęcia w ten sposób decyzji, w tym również nie dochodzi do ich
                profilowania.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rodo;
