import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import classes from "./OfferItem.module.css";

const OfferItem = () => {
    const [isWrong, setIsWrong] = useState(true);
    const navigate = useNavigate();
    const profiles = {
        informatyk: {
            title: "Technik Informatyk",
            desc: [
                "dostosowywać pracę komputera do potrzeb właściciela",
                "dobierać podzespoły do komputerów osobistych i je testować",
                "planować konfigurację komputera",
                "projektować i zarządzać sieciami",
                "instalować i konfigurować systemy operacyjne (Windows i Linux)",
                "tworzyć strony internetowe w technologiach HTML, CSS, JavaScript, PHP",
                "zarządzać relacyjnymi bazami danych",
                "zabezpieczać systemy i ich zawartość"
            ],
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
            desc: [
                "posługiwać się nowoczesnymi technikami komputerowymi w celu projektowania i konstruowania urządzeń i systemów mechatronicznych",
                "diagnozować i naprawiać systemy z zastosowaniem nowoczesnych narzędzi pomiarowych",
                "obsługiwać i programować sterowniki programowalne",
                "montować i uruchamiać urządzenia i systemy mechatroniczne",
                "programowania mikrokontrolerów",
            ], qualifications: [
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
            desc: [
                "tworzyć strony internetowe w technologiach HTML, CSS, JavaScript, PHP",
                "tworzyć aplikacje mobilne w technologiach takich jak Kotlin oraz Xamarin",
                "tworzyć aplikacje desktopowe w technologiach C# i Java",
                "testować i dokumentować aplikacje",
                "tworzyć systemy zarządzania treścią (CMS)",
                "obsługiwać profesjonalne narzędzia programistyczne takie jak Microsoft Visual Studio, Android Studio lub Pycharm",
                "projektować i zarządzać relacyjnymi bazami danych",
            ],
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
            desc: [
                "projektować lokalne sieci komputerowe",
                "techniki światłowodowej",
                "konfiguracji urządzeń sieciowych przewodowych i bezprzewodowych",
                "konfiguracji central telefonicznych",
                "administrowania systemami Windows i Linux",
            ],
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
            desc: [
                "montażu, instalacji oraz naprawy urządzeń elektronicznych",
                "programowania mikrokontrolerów",
                "systemów operacyjnych i rodzajów sieci komputerowych",
                "instalowania i serwisowania systemów telewizji naziemnej, satelitarnej i kablowej",
                "obsługi systemów monitoringu",

            ], qualifications: [
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
            desc: [
                "projektowania, montażu, eksploatacji i konserwacji instalacji elektrycznych",
                "diagnozowania i usuwania awarii w systemach elektroenergetycznych",
                "przeprowadzania pomiarów i analizowania danych związanych z instalacjami elektrycznymi",
                "pracy z narzędziami, sprzętem i urządzeniami elektrotechnicznymi",
                "stosowania przepisów i norm związanych z bezpieczeństwem w pracy z elektrycznością",
                "wdrażania nowych technologii i rozwiązań w dziedzinie elektrotechniki"
            ],
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

    const {profile = ""} = useParams<{ profile: string }>();

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
                    <h1 className={classes.h1}>{(profiles as any)[profile].title}</h1>
                    <h2>Nauczysz się: </h2>
                    <ul className={classes.mainDesc}>
                        {(profiles as any)[profile].desc.map((qual: any) => {
                            return (
                                <li className={classes.offerLi}>
                                    <span>{qual}</span>
                                </li>
                            );
                        })}
                    </ul>
                    <h2 className={classes.h2}>Kwalifikacje</h2>
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
