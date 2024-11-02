import { useState, useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import Box from '../components/Box';

const Standards = () => {
  const [activeChapter, setActiveChapter] = useState(null);

  const chapters = [
    {
      id: 'intro',
      title: 'Wstęp',
      content: [
        `Naczelną zasadą wszystkich działań podejmowanych przez Centrum Rozwoju Dziecka "Zgrane Dzieciaki" (dalej Gabinet) jest działanie dla dobra dziecka i w jego najlepszym interesie.`,
        `Pracujemy, aby nasz Gabinet był miejscem bezpiecznym i otwartym na potrzeby każdego dziecka.`,
        `Każdy pracownik traktuje dziecko z szacunkiem, dba o jego rozwój, zna i uwzględnia jego potrzeby. Pracownicy Gabinetu, realizując powyższe cele, działają w ramach obowiązującego prawa, przepisów wewnętrznych Gabinetu oraz swoich kompetencji.`,
        `Gabinet wprowadza standardy ochrony małoletnich w oparciu o ustawę z dnia 28 lipca 2023 r. o zmianie ustawy – Kodeks rodzinny i opiekuńczy oraz niektórych innych ustaw (Dz. U. Poz.1606) zmieniającą dotychczasową ustawę z dnia 13 maja 2016 r. o przeciwdziałaniu zagrożeniom przestępczością na tle seksualnym, której tytuł na mocy tychże zmian otrzymuje brzmienie „o przeciwdziałaniu zagrożeniom przestępczością na tle seksualnym i ochronie małoletnich" (tekst jedn.: Dz. U. z 2023 r. poz. 1304 z późn. zm.).`,
        `Bieżący dokument służyć ma zapewnieniu jak najlepszej ochrony przed krzywdzeniem, rozumianym przez nas jako zaniedbanie dziecka, stosowanie wobec niego przemocy fizycznej bądź psychicznej oraz wykorzystanie. Standardy ochrony małoletnich przed krzywdzeniem dotyczą wszystkich dzieci i są obowiązkowe do stosowania przez wszystkich pracowników Gabinetu, stażystów, wolontariuszy i praktykantów.`,
      ],
    },
    {
      id: 'legal',
      title: 'Podstawy prawne polityki ochrony dzieci',
      content: [
        `Konwencja o prawach dziecka przyjęta przez Zgromadzenie Ogólne Narodów Zjednoczonych dnia 20 listopada 1989 r. (Dz. U. z 1991r. Nr 120, poz. 526 z późn. zm.)`,
        `Konstytucja Rzeczypospolitej Polskiej z dnia 2 kwietnia 1997 r. (Dz. U. Nr 78, poz. 483 z późn. zm.)`,
        `Ustawa z dnia 25 lutego 1964 r. Kodeks rodzinny i opiekuńczy (t.j. Dz. U. z 2020 r. poz. 1359)`,
        `Ustawa z dnia 28 lipca 2023 r. o zmianie ustawy – Kodeks rodzinny i opiekuńczy oraz niektórych innych ustaw (Dz. U. poz. 1606).`,
        `Ustawa z dnia 13 maja 2016 r. o przeciwdziałaniu zagrożeniom przestępczością na tle seksualnym (t.j. Dz. U. z 2023 r. poz. 31 z późn. zm.)`,
        `Ustawa z dnia 29 lipca 2005 r. o przeciwdziałaniu przemocy domowej (t.j. Dz. U. z 2021 r. poz. 1249)`,
        `Ustawa z dnia 6 czerwca 1997 r. Kodeks karny (t.j. Dz. U. z 2022 r. poz. 1138 z późn. zm.).`,
        `Ustawa z dnia 6 czerwca 1997 r. Kodeks postępowania karnego (t.j. Dz. U. z 2022 r. poz. 1375 z późn. zm.)`,
        `Ustawa z dnia 23 kwietnia 1964 r. Kodeks cywilny (t.j. Dz. U. z 2022 r. poz. 1360 z późn. zm.) -art. 23 i 24`,
        `Ustawa z dnia 17 listopada 1964 r. Kodeks postępowania cywilnego (t.j. Dz. U. z 2023 r. poz. 1550 z późn. zm.`,
      ],
    },
    {
      id: 'chapter-1',
      title: 'ROZDZIAŁ I - Słowniczek pojęć',
      content: [
        `Dane osobowe – informacje dotyczące podopiecznego Gabinetu umożliwiające jego identyfikację`,
        `Właściciel – Julitta Janiak`,
        `Gabinet – Centrum Rozwoju Dziecka „Zgrane Dzieciaki"`,
        `Dziecko – każda osoba do ukończenia 18 roku życia;`,
        `Dobro dziecka – „stan, w którym dziecko osiąga prawidłowy, całościowy i harmonijny rozwój psychiczny, fizyczny i społeczny, z poszanowaniem jego godności i wynikających z niej naturalnych praw. Dobro to jest kształtowane w szczególności przez pozytywne relacje osobiste, relacje rodzinne i sytuacje wychowawcze"`,
        `Krzywdzenie dziecka – popełnienie czynu zabronionego lub czynu karalnego na szkodę dziecka przez jakąkolwiek osobę w tym pracownika Gabinetu, lub zagrożenie dobra dziecka, w tym jego zaniedbywanie;`,
        `Personel/Pracownik – osoba zatrudniona w Gabinecie na podstawie umowy o pracę, umowy zlecenia, bądź świadcząca usługi na zasadzie B2B, a także osoba świadcząca pracę w Gabinecie na zasadach wolontariatu, trenerzy, animatorzy, praktykanci, stażyści.`,
        `Opiekun dziecka – osoba uprawniona do reprezentacji dziecka, w tym rodzic (także rodzic zastępczy) lub opiekun prawny.`,
        `Zgoda opiekuna prawnego – zgoda co najmniej jednego z rodziców dziecka. W przypadku braku porozumienia między rodzicami dziecka należy poinformować rodziców o konieczności rozstrzygnięcia sprawy przez sąd rodzinny.`,
      ],
    },
    {
      id: 'chapter-2',
      title: 'ROZDZIAŁ II - Zasady bezpiecznych relacji pomiędzy personelem a dziećmi',
      content: [
        `Naczelną zasadą wszystkich czynności podejmowanych przez personel jest działanie dla dobra dziecka i w jego najlepszym interesie. Personel traktuje dziecko z szacunkiem oraz uwzględnia jego godność i potrzeby.`,
        `Personel realizując zasady działa w ramach obowiązującego prawa, przepisów wewnętrznych instytucji oraz swoich kompetencji. Zasady bezpiecznych relacji personelu z dziećmi obowiązują wszystkich pracowników, stażystów i wolontariuszy. Znajomość i zaakceptowanie zasad są potwierdzone podpisaniem oświadczenia.`,
        `Personel zna i stosuje zasady bezpiecznych relacji personel-dziecko ustalone w Gabinecie, obejmujące dopuszczalne zachowania i działania w pracy z dzieckiem i wskazujące niepożądane praktyki (Załącznik nr 1).`,
        `Każdy pracownik zobowiązany jest do podpisania oświadczenia o zapoznaniu się i zobowiązaniu do stosowania zasad (Załącznik nr 2).`,
      ],
    },
    {
      id: 'chapter-3',
      title: 'ROZDZIAŁ III - Czynniki ryzyka i symptomy krzywdzenia dzieci',
      content: [
        `Każdy pracownik zobowiązany jest do podpisania oświadczenia o zapoznaniu się i zobowiązaniu do stosowania zasad (Załącznik nr 2).`,
        `Rekrutacja pracowników Gabinetu odbywa się zgodnie z zasadami bezpiecznej rekrutacji personelu. Zasady Rekrutacji stanowią Załącznik nr 3 do niniejszych Standardów.`,
        `Pracownicy znają i stosują zasady bezpiecznych relacji personel-dziecko. Zasady stanowią Załącznik nr 1 do niniejszych Standardów.`,
        `Pracownicy Gabinetu posiadają wiedzę na temat czynników ryzyka i symptomów krzywdzenia dzieci i zwracają na nie uwagę w ramach wykonywanych obowiązków.`,
        `Pracownicy pogłębiają swoją wiedzę w zakresie ochrony dzieci przed krzywdzeniem.`,
        `Pracownicy Gabinetu monitorują sytuację i dobrostan dziecka.`,
        `W przypadku zidentyfikowania czynników ryzyka, bądź podjęcia informacji o krzywdzeniu dziecka, pracownicy Gabinetu oraz osoby inne podejmują odpowiednie procedury.`,
      ],
    },
    {
      id: 'chapter-4',
      title: 'ROZDZIAŁ IV - Procedury interwencji w przypadku podejrzenia krzywdzenia dziecka',
      content: [
        `Jeśli personel zaobserwuje lub otrzyma informację o przemocy lub wykorzystaniu osoby małoletniej jest zobowiązany do natychmiastowej reakcji w celu powstrzymania zachowań niedozwolonych i zapewnieniu ochrony małoletniemu.`,
        `W przypadku powzięcia przez pracownika podejrzenia, że dziecko jest krzywdzone, ma on obowiązek sporządzenia notatki służbowej i przekazania uzyskanej informacji właścicielowi Gabinetu.`,
        `Właściciel powołuje zespół interwencyjny, w skład którego mogą wejść: właściciel, pedagog, psycholog oraz inni pracownicy mający wiedzę na temat skutków krzywdzenia dziecka lub o krzywdzonym dziecku celem analizy sytuacji dziecka. Zespół interwencyjny sporządza plan wsparcia małoletniego.`,
        `Właściciel lub przedstawiciel zespołu interwencyjnego kontaktuje się z rodzicem/opiekunem prawnym dziecka. Z rozmowy sporządzana jest notatka służbowa.`,
        `W przypadku, gdy zachodzi uzasadnione podejrzenie popełnienia wobec małoletniego jednego z czynów określanym w słowniku mianem „krzywdzenia": właściciel placówki składa zawiadomienie do odpowiednich organów, realizując obowiązek wynikający z art. 304 § 2 ustawy z dnia 6 czerwca 1997 r. Kodeks postępowania karnego (Dz. U. z 2022 r., poz. 1375 ze zm.);`,
        `W przypadku gdy pracownik Gabinetu zauważy, że jakiekolwiek dziecko jest krzywdzone przez innego pracownika, osoba ta zobowiązana jest niezwłocznie powiadomić o tym właściciela Gabinetu oraz sporządzić notatkę zawierającą dokładny opis zaistniałej sytuacji. Właściciel Gabinetu podejmuje działania mające na celu wyjaśnienie okoliczności zdarzenia. W przypadku potwierdzenia podejrzenia, że fakt krzywdzenia miał miejsce, właściciel Gabinetu w trybie natychmiastowym wszczyna postępowanie dyscyplinarne względem tej osoby oraz sporządza pisemne zawiadomienie o podejrzeniu popełnienia przestępstwa.`,
        `W każdym przypadku podejrzenia krzywdzenia lub posiadania informacji o krzywdzeniu dziecka sporządza się protokół interwencji, którego wzór stanowi Załącznik nr 4 do niniejszych Standardów.`,
        `W Gabinecie w przestrzeni dostępnej dla pacjentów wywiesza się informacje o ogólnopolskich telefonach pomocy osób pokrzywdzonych przestępstwami oraz przemocą w rodzinie:`,
        `numer SOS linia pomocy pokrzywdzonym telefon +48 222 309 900`,
        `Niebieska Linia tel. 812 0002`,
        `telefon zaufania dla dzieci i młodzieży tel. 116 111`,
      ],
    },
    {
      id: 'chapter-5',
      title: 'ROZDZIAŁ V - Zasady ochrony danych osobowych oraz wizerunku dzieci w placówce',
      content: [
        `Gabinet zapewnia najwyższe standardy ochrony danych osobowych dzieci zgodnie z obowiązującymi przepisami prawa.`,
        `Gabinet, uznając prawo dziecka do prywatności i ochrony dóbr osobistych, zapewnia ochronę wizerunku dziecka`,
        `Zgoda rodziców/opiekunów prawnych na wykorzystanie wizerunku ich dziecka jest tylko wtedy wiążąca, jeśli dzieci i rodzice/opiekunowie prawni zostali poinformowani o sposobie wykorzystania zdjęć/nagrań i ryzyku wiążącym się z publikacją wizerunku.`,
        `Zdjęcia lub nagrania zawierające wizerunki dzieci mogą być udostępniane w mediach społecznościowych i na stronie internetowej www tylko gdy rodzice/opiekunowie prawni tych dzieci wyrażą na to zgodę.`,
        `Jeśli wizerunek dziecka stanowi jedynie szczegół całości takiej jak zgromadzenie, krajobraz, impreza publiczna, zgoda rodziców/opiekunów prawnych dziecka nie jest wymagana.`,
      ],
    },
    {
      id: 'chapter-6',
      title: 'ROZDZIAŁ VI - Zasady przeglądu, aktualizacji oraz ocena standardów',
      content: [
        `W Gabinecie osobą odpowiedzialną za standardy ochrony małoletnich przed krzywdzeniem jest właściciel.`,
        `Właściciel jest odpowiedzialny za monitorowanie realizacji standardów, za reagowanie na sygnały naruszenia standardów oraz za proponowanie zmian w standardach.`,
        `Właściciel prowadzi Rejestr zgłoszeń sytuacji krzywdzenia małoletnich, który stanowi Załącznik nr 5 do niniejszych Standardów.`,
        `Właściciel przeprowadza wśród personelu placówki, przynajmniej raz na 2 lata, ankietę monitorującą poziom realizacji Polityki. Wzór ankiety stanowi Załącznik nr 6 do niniejszych Standardów.`,
      ],
    },
    {
      id: 'chapter-7',
      title: 'ROZDZIAŁ VII - Przepisy końcowe',
      content: [
        `Standardy wchodzą w życie z dniem ich ogłoszenia.`,
        `Upowszechnienie następuje w sposób dostępny dla personelu Gabinetu, w szczególności poprzez wywieszenie poprzez wywieszenie na tablicy przeznaczonej dla personelu Gabinetu lub poprzez przesłanie ich tekstu drogą elektroniczną pracownikom oraz poprzez zamieszczenie na stronie internetowej Gabinetu.`,
      ],
    },
  ];

  const scrollToChapter = chapterId => {
    const element = document.getElementById(chapterId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveChapter(chapterId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const chapters = document.querySelectorAll('[id^="chapter-"]');
      chapters.forEach(chapter => {
        const rect = chapter.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveChapter(chapter.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumbs />

      {/* Header */}
      <Box className="mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h1 className="text-3xl font-bold mb-4">Standardy</h1>
        <p className="text-lg opacity-90">
          Standardy ochrony małoletnich w Centrum Rozwoju Dziecka "Zgrane Dzieciaki"
        </p>
      </Box>

      <div className="grid md:grid-cols-4 gap-8">
        {/* Table of Contents with fixed bullet alignment */}
        <div className="md:col-span-1">
          <div className="sticky top-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Spis treści</h2>
            <ul className="space-y-2 list-disc pl-5 text-gray-600">
              {chapters.map(chapter => (
                <li key={chapter.id} className="leading-tight">
                  <button
                    onClick={() => scrollToChapter(chapter.id)}
                    className={`text-left hover:text-blue-600 transition-colors block py-1 -mt-1 ${
                      activeChapter === chapter.id ? 'text-blue-600 font-medium' : ''
                    }`}
                  >
                    {chapter.title.includes('ROZDZIAŁ')
                      ? chapter.title.split(' - ')[1]
                      : chapter.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3 space-y-12">
          {chapters.map(chapter => (
            <div key={chapter.id} id={chapter.id} className="scroll-mt-8">
              <Box>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{chapter.title}</h2>
                <div className="space-y-4">
                  {chapter.content.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`text-gray-600 leading-relaxed ${
                        paragraph.startsWith('•') ? 'pl-4' : ''
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Box>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Standards;
