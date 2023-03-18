import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import classes from "./OfferItem.module.css";

const OfferItem = () => {
  const [isWrong, setIsWrong] = useState(true);
  const navigate = useNavigate();
  const profiles = {
    informatyk: {
      title: "Technik Informatyk",
      desc: "Informatyka to obecnie samodzielna dyscyplina naukowa, ale też narzędzie wykorzystywane przez inne nauki. To dziedzina techniki i ogromny przemysł wytwarzający sprzęt i oprogramowanie. Dlatego tez informatyka posługuje się własnym systemem pojęć - jako nauka bada prawa rządzące procesami przetwarzania, zapisywania i przesyłania informacji, wykorzystując do tego najnowsze technologie. Do głównych zadań informatyka należy min. dostosowanie pracy komputera do potrzeb właściciela, a więc dobieranie podzespołów do komputerów osobistych i ich testowanie, planowanie konfiguracji, projektowanie sieci okablowania i dobieranie urządzeń wspomagających działanie sieci. Aby zdobyć te umiejętności, uczniowie poruszają się w obszarach informatyki niezbędnych do przyszłej pracy lub nauki, takich jak: języki programowania, systemy operacyjne, bazy danych czy algorytmy i struktury danych. Przyszły informatyk będzie potrafił też min. tworzyć strony internetowe, zabezpieczać systemy i ich zawartość. Pracownie i laboratoria specjalistyczne są jednym z najważniejszych ogniw w procesie dydaktycznym nauczania zawodu - umożliwiają uczniom naszej szkoły praktyczne sprawdzenie wiadomości teoretycznych uzyskanych na przedmiotach zawodowych. Zajęcia odbywają się w kilkuosobowych grupach ćwiczeniowych, dzięki czemu umożliwia to uczniom dokładne zapoznanie się z badanymi układami i sprzętem pomiarowym będącym w dyspozycji poszczególnych pracowni.",
      qualifications: [
        {
          name: "K1 - INF.02",
          desc: "Administracja i eksploatacja systemów komputerowych, urządzeń peryferyjnych i lokalnych sieci komputerowych",
        },
        {
          name: "K2 - INF.03",
          desc: "Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych",
        },
      ],
      specializedSubjects: [
        "Język obcy zawodowy",
        "Podstawy informatyki",
        "Systemy operacyjne",
        "Urządzenia techniki komputerowej",
        "Lokalne sieci komputerowe",
        "Witryny i aplikacje internetowe",
        "Systemy baz danych",
        "BHP",
        "Eksploatacja urządzeń techniki komputerowej",
        "Administracja systemami operacyjnymi",
        "Montaż i konfiguracja lokalnych sieci komputerowych",
        "Projektowanie baz danych",
        "Tworzenie stron i aplikacji internetowych",
      ],
    },
    mechatronik: {
      title: "Technik Mechatronik",
      desc: "Mechatronika jest zintegrowaną dziedziną nauki i techniki, zajmującą się problemami mechaniki, elektroniki, robotyki, automatyki oraz informatyki. Ten nowy obszar nauki rozwija się błyskawicznie i w dniu dzisiejszym jest bardzo dużo dziedzin, w których napotykamy na urządzenia mechatroniczne. Urządzenia te znajdują zastosowanie w przemyśle lotniczym, samochodowym, elektronicznym, maszynowym, precyzyjnym, można je spotkać również w nowoczesnych przyrządach medycznych, sprzęcie biurowym, sprzęcie AGD czy nawet zabawkach dla dzieci. Technik mechatronik jest nowym zawodem. W trakcie nauki w technikum otrzymasz wiedzę min. z elektrotechniki, elektroniki, mechaniki oraz pneumatyki i hydrauliki, co pozwoli ci posługiwać się nowoczesnymi technikami komputerowymi w celu projektowania i konstruowania urządzeń i systemów mechatronicznych, diagnozować i naprawiać systemy z zastosowaniem nowoczesnych narzędzi pomiarowych, obsługiwać i programować sterowniki programowalne. Pracownie i laboratoria specjalistyczne są jednym z najważniejszych ogniw w procesie dydaktycznym nauczania zawodu - umożliwiają uczniom naszej szkoły praktyczne sprawdzenie wiadomości teoretycznych uzyskanych na przedmiotach zawodowych. Zajęcia odbywają się w kilkuosobowych grupach ćwiczeniowych, dzięki czemu umożliwia to uczniom dokładne zapoznanie się z badanymi układami i sprzętem pomiarowym będącym w dyspozycji poszczególnych pracowni. Dla zawodu technik mechatronik nasza szkoła zapewnia takie specjalistyczne pracownie. Przyszłego mechatronika powinna cechować otwartość na poznawanie nowych dziedzin techniki, logiczne myślenie, umiejętność uczenia się, samokontrola i cierpliwość, a także zdolności manualne. Ukończenie tego kierunku daje możliwości pracy i dalszego kształcenia praktycznie w każdym obszarze techniki.",
      qualifications: [
        {
          name: "K1 - ELM.03",
          desc: "Montaż, uruchomienie i konserwacja urządzeń i systemów mechatronicznych",
        },
        {
          name: "K2 - ELM.06",
          desc: "Eksploatacja i programowanie urządzeń i systemów mechatronicznych",
        },
      ],
      specializedSubjects: [
        "Elektrotechnika i elektronika",
        "Technologie i konstrukcje mechaniczne",
        "Pneumatyka i hydraulika",
        "Urządzenia i systemy mechatroniczne",
        "Język obcy zawodowy",
        "BHP",
        "Pomiary elektryczne i elektroniczne",
        "Pracownia technologii i konstrukcji mechanicznych",
        "Pracownia pneumatyki i hydrauliki",
        "Montaż i obsługa urządzeń i systemów mechatronicznych",
        "Diagnostyka i naprawa urządzeń mechatronicznych",
        "Programowanie urządzeń mechatronicznych",
        "Pracownia urządzeń mikroprocesorowych",
        "Rysunek techniczny",
      ],
    },
    programista: {
      title: "Technik Programista",
      desc: "Technik programista zajmuje się opracowywaniem i wdrażaniem do użytku programów komputerowych. To dzisiaj jeden z najlepiej zarabiających i najbardziej poszukiwanych na rynku pracy zawodów. Uczniowie, którzy podejmą naukę na nowym kierunku zdobędą wiedzę teoretyczną i umiejętności praktyczne z kwalifikacji zawodowych w zakresie projektowania baz danych i stron internetowych oraz programowania i testowania aplikacji. Będą tworzyć programy w najpopularniejszych obecnie językach tj. Python, C++, JavaScript, PHP, a także znajomości innych języków tj. SQL (przydatnego do tworzenia i zarządzania relacyjnymi bazami danych), HTML 5 i CSS (wykorzystywanych do tworzenia stron internetowych). Dodatkowo w ramach zajęć możliwe będzie poznanie specjalistycznych narzędzi programistycznych takich jak Android Studio, Microsoft Visual Studio oraz tworzonych w ich środowisku programów w nowoczesnych językach takich jak Kotlin (Android), Xamarin służący do tworzenia aplikacji działających natywnie w smartfonach z dominującymi systemami operacyjnymi takimi jak: Android Windows Phone czy też desktopowy Windows. Szczegółowy opis zajęć programisty jest bezużyteczny, ponieważ jest to dziedzina, która zmienia się niemal z dnia na dzień wraz z ewolucją myśli informatycznej. Dlatego kandydat na programistę powinien być przygotowany nie tylko na ciągłe aktywne doskonalenie swoich umiejętności, ale także na naukę zupełnie nowych technik i języków programowania. Zdobycie wykształcenia na poziomie szkoły technicznej w zawodzie technik programista umożliwi absolwentom szkoły kontynuację nauki na wyższych uczelniach technicznych lub uniwersytetach, a także pozwoli na rozpoczęcie własnej drogi zawodowej.",
      qualifications: [
        {
          name: "K1 - INF.03",
          desc: "Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych",
        },
        {
          name: "K2 - INF.04",
          desc: "Projektowanie, programowanie i testowanie aplikacji",
        },
      ],
      specializedSubjects: [
        "Język obcy zawodowy",
        "Podstawy informatyki",
        "Podstawy programowania",
        "Strony i aplikacje internetowe",
        "Systemy baz danych",
        "Programowanie strukturalne i obiektowe",
        "Programowania aplikacji mobilnych",
        "Programowanie aplikacji webowych",
        "BHP",
        "Pracownia baz danych",
        "Pracownia programowania strukturalnego i obiektowego",
        "Pracownia aplikacji mobilnych",
        "Pracownia aplikacji webowych",
        "Pracownia testowania i dokumentowania aplikacji",
      ],
    },
    teleinformatyk: {
      title: "Technik Teleinformatyk",
      desc: "Teleinformatyk to nowy zawód, który łączy w sobie co najmniej trzy dyscypliny: elektronikę, informatykę i zdobycze telekomunikacji. Trudno wyobrazić sobie codzienne życie bez telefonów, Internetu czy telewizji. Korzystamy z nich w dużej mierze za przyczyną nauki, jaką jest teleinformatyka. Kierunek ten kształci specjalistów, którzy bez trudności poruszają się w tematyce projektowania lokalnych sieci komputerowych i techniki światłowodowej, konfiguracji urządzeń sieciowych przewodowych i bezprzewodowych, konfiguracji central telefonicznych, budowie instalacji okablowania teleinformatycznego czy administrowania systemami Windows i Linux. Do zadań technika teleinformatyka więc może należeć, np. projektowanie prostych sieci komputerowych oraz administrowanie nimi. Urządzenia i systemy teleinformatyczne charakteryzują się dużym stopniem złożoności, nowoczesności i częstymi zmianami technologicznymi, dlatego ze względu na szybki postęp, jaki dokonuje się w dziedzinie teleinformatyki, praca w tym zawodzie wymaga stałego poszerzania wiedzy. Istnieje potrzeba śledzenia nowych rozwiązań technicznych, które obejmują wszystkie obszary informatyki, teleinformatyki i telekomunikacji. Ciągły rozwój telekomunikacji wymusza zapotrzebowanie na specjalistów w tym zawodzie. Technicy teleinformatycy znajdują zatrudnienie w przedsiębiorstwach korzystających z elektronicznej informacji, także w organach administracji publicznej. Pracują też w firmach świadczących usługi w zakresie telekomunikacji i teleinformatyki, projektując i wdrażając nowoczesne rozwiązania teleinformatyczne, także w zakładach montujących, sprzedających i serwisujących urządzenia komputerowe i sieciowe. Pracownie i laboratoria specjalistyczne są jednym z najważniejszych ogniw w procesie dydaktycznym nauczania zawodu - umożliwiają uczniom naszej szkoły praktyczne sprawdzenie wiadomości teoretycznych uzyskanych na przedmiotach zawodowych. Zajęcia odbywają się w kilkuosobowych grupach ćwiczeniowych, dzięki czemu umożliwia to uczniom dokładne zapoznanie się z badanymi układami i sprzętem pomiarowym będącym w dyspozycji poszczególnych pracowni. Dla zawodu technik teleinformatyk nasza szkoła posiada takie specjalistyczne pracownie. Aby kształcić się w zawodzie teleinformatyka, niezbędne są zdolności matematyczne, informatyczne oraz techniczne, analityczny umysł, dobra pamięć, zdolność koncentracji, dokładność i systematyczność na co dzień.",
      qualifications: [
        {
          name: "K1 - INF.07",
          desc: "Montaż i konfiguracja lokalnych sieci komputerowych oraz administrowanie systemami operacyjnymi",
        },
        {
          name: "K2 - INF.08",
          desc: "Eksploatacja, konfiguracja oraz administrowanie sieciami rozległymi",
        },
      ],
      specializedSubjects: [
        "Język obcy zawodowy",
        "Elektrotechnika i elektronika",
        "Technika cyfrowa",
        "Sieci komputerowe",
        "Systemy transmisji danych",
        "Systemy komutacyjne",
        "Pomiary elektryczne i elektroniczne",
        "Eksploatacja UTK",
        "BHP",
        "Administracja systemami operacyjnymi",
        "Konfiguracja systemów komutacyjnych",
        "Montaż i użytkowanie systemów transmisji danych",
        "Administracja sieciowymi systemami komputerowymi",
        "Konfiguracja urządzeń sieciowych",
        "Rysunek techniczny",
      ],
    },
    elektronik: {
      title: "Technik Elektronik",
      desc: "Jedna z definicji elektroniki jako nauki mówi, iż jest to dziedzina wiedzy, zajmującej się wytwarzaniem i przetwarzaniem informacji, przy czym informacja ta jest zapisana w postaci impulsów i pól elektromagnetycznych. Najpopularniejsze urządzenia elektroniczne to radia, zegarki na rękę czy komputery, ale elektronicznie sterowane są także niektóre pojazdy czy systemy inteligentnych budynków. Bez osiągnięć matematyki, informatyki czy nowoczesnych technologii elektronika nie istniałaby. Wystarczy wspomnieć lasery, światłowody czy choćby pospolity czujnik ruchu. Tak więc elektroniką spotykamy się na co dzień, a praca technika elektronika jest tak doceniana. Polega na montażu, instalacji oraz naprawie urządzeń elektronicznych wykorzystywanych w nowoczesnej automatyce zarówno przemysłowej, jak i codziennego użytku. W trakcie nauki uczeń zdobywa wiedzę z podstaw programowania, z zakresu elementów, układów, zjawisk i praw rządzących w świecie elektrotechniki i elektroniki, systemów operacyjnych i rodzajów sieci komputerowych, umiejętności instalowania i serwisowania systemów telewizji naziemnej, satelitarnej, kablowej i systemów monitoringu. To także umiejętności programowania mikrokontrolerów - układów elektronicznych, które są obecnie prawie w każdym urządzeniu powszechnego użytku. Pracownie i laboratoria specjalistyczne są jednym z najważniejszych ogniw w procesie dydaktycznym nauczania zawodu - umożliwiają uczniom naszej szkoły praktyczne sprawdzenie wiadomości teoretycznych uzyskanych na przedmiotach zawodowych. Zajęcia odbywają się w kilkuosobowych grupach ćwiczeniowych, dzięki czemu umożliwia to uczniom dokładne zapoznanie się z badanymi układami i sprzętem pomiarowym będącym w dyspozycji poszczególnych pracowni. Dla zawodu technik elektronik nasza szkoła zapewnia takie specjalistyczne pracownie. Przyszłego elektronika powinno cechować logiczne myślenie, pracowitość, ciekawość w odkrywaniu nowej wiedzy, fascynacja nowymi technologiami, systematyczność i punktualność. Po ukończeniu kierunku można kontynuować naukę na studiach lub podjąć pracę we wszystkich firmach związanych z branżą elektroniczną, a tych na rynku jest bardzo wiele, gdyż obecnie wszystko opiera się na elektronice.",
      qualifications: [
        {
          name: "K1 - ELM.02",
          desc: "Montaż oraz instalowanie układów i urządzeń elektronicznych",
        },
        {
          name: "K2 - ELM.05",
          desc: "Eksploatacja urządzeń elektronicznych",
        },
      ],
      specializedSubjects: [
        "Język obcy zawodowy",
        "Elektrotechnika i elektronika",
        "Systemy telewizyjne",
        "Systemy kontroli dostępu",
        "Systemy sieci komputerowych",
        "Systemy mikroprocesorowe",
        "Układy analogowe",
        "Układy cyfrowe",
        "BHP",
        "Pomiary elektryczne i elektroniczne",
        "Montaż instalacji i urządzeń elektronicznych",
        "Eksploatacja urządzeń elektronicznych",
        "Montaż układów elektronicznych",
        "Programowanie systemów mikroprocesorowych",
        "Projektowanie i analiza układów elektronicznych",
        "Rysunek techniczny",
      ],
    },
    elektryk: {
      title: "Technik Elektryk",
      desc: "Trudno sobie dzisiaj wyobrazić życie bez energii elektrycznej. Elektryczność jest najdogodniejszą postacią użytkowania energii. To dzięki niej funkcjonuje nasze mieszkanie, ale i różne gałęzie przemysłu, transport, telekomunikacja, nowoczesne rolnictwo, medycyna, i wiele innych dziedzin naszego życia. Technik elektryk to specjalista zatrudniony przy wytwarzaniu i przesyłaniu energii elektrycznej, przy wykonywaniu i eksploatacji instalacji elektrycznych, zgodnie z dokumentacją techniczną. Jest niezbędny przy naprawie i konserwacji aparatury rozdzielczej, sterującej i zabezpieczającej w transporcie kolejowym, powietrznym i wodnym oraz szeroko rozumianym przemyśle. Zajmuje się również pracami i badaniami o charakterze elektrotechnicznym. Zawód elektryka jest tym zawodem, który zawsze będzie cieszył się dużą popularnością. Trudno, bowiem sobie wyobrazić, że nagle zostanie odkryta inna forma energii, która zastąpi energię elektryczną. Można powiedzieć, że ten zawód daje pewne miejsce pracy, zobowiązuje jednak do systematycznego samokształcenia - trzeba śledzić postęp technologiczny, aby na bieżąco móc wykonywać tę interesującą pracę. Możliwości zatrudnienia w zawodzie elektryka są naprawdę bardzo duże, począwszy od przemysłu, poprzez usługi, skończywszy na handlu. Pracownie i laboratoria specjalistyczne są jednym z najważniejszych ogniw w procesie dydaktycznym nauczania zawodu - umożliwiają uczniom naszej szkoły praktyczne sprawdzenie wiadomości teoretycznych uzyskanych na przedmiotach zawodowych. Zajęcia odbywają się w kilkuosobowych grupach ćwiczeniowych, dzięki czemu umożliwia to uczniom dokładne zapoznanie się z badanymi układami i sprzętem pomiarowym będącym w dyspozycji poszczególnych pracowni. Dla zawodu elektryk nasza szkoła zapewnia takie specjalistyczne pracownie. Nasza szkoła ma długie tradycje w kształceniu elektryków oraz współpracuje z wieloma firmami branży elektryczno-energetycznej. Przyszły elektryk powinien lubić majsterkować, mieć zdolności manualne przydatne do wykonywania czynności związanych z elektryką, mieć zdolności do nauki przedmiotów ścisłych, zwłaszcza matematyki i fizyki. Ciekawość, umiejętność uczenia się oraz dobra pamięć z pewnością ułatwią życie.",
      qualifications: [
        {
          name: "K1 - ELE.02",
          desc: "Montaż, uruchamianie i konserwacja instalacji, maszyn i urządzeń elektrycznych",
        },
        {
          name: "K2 - ELE.05",
          desc: "Eksploatacja maszyn, urządzeń i instalacji elektrycznych",
        },
      ],
      specializedSubjects: [
        "Język obcy zawodowy",
        "Elektrotechnika i elektronika",
        "Maszyny elektryczne",
        "Aparaty i urządzenia elektryczne",
        "Instalacje elektryczne",
        "Użytkowanie instalacji elektrycznych",
        "Obsługa maszyn i urządzeń elektrycznych",
        "Układy cyfrowe",
        "BHP",
        "Układy analogowe",
        "Pomiary elektryczne i elektroniczne",
        "Eksploatacja maszyn, urządzeń i instalacji elektrycznych",
        "Montaż, uruchamianie i konserwacja instalacji elektrycznych",
        "Montaż, uruchamianie i konserwacja maszyn i urządzeń elektrycznych",
        "Rysunek techniczny",
      ],
    },
  };

  const { profile = "" } = useParams<{ profile: string }>();

  useEffect(() => {
    let profileNames = [
      "informatyk",
      "mechatronik",
      "programista",
      "teleinformatyk",
      "elektronik",
      "elektryk",
    ];
    profile === undefined || profileNames.indexOf(profile) + 1 === 0
      ? navigate("/offer")
      : setIsWrong(false);
  }, [profile, navigate]);

  return (
    <>
      {!isWrong && (
        <>
          <h1>{(profiles as any)[profile].title}</h1>
          <p className={classes.mainDesc}>{(profiles as any)[profile].desc}</p>
          <h2 className={classes.h2}>Kwalifikajce</h2>
          <ul>
            {(profiles as any)[profile].qualifications.map((qual: any) => {
              return (
                <li className={classes.offerLi}>
                  <h3>{qual.name}</h3>
                  <span>{qual.desc}</span>
                </li>
              );
            })}
          </ul>
          <h2 className={classes.h2}>Przedmioty specjalistyczne</h2>
          <ul className={classes.lastItem}>
            {(profiles as any)[profile].specializedSubjects.map((qual: any) => {
              return (
                <li className={classes.offerLi}>
                  <span>{qual}</span>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};

export default OfferItem;
