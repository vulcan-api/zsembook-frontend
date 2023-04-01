import React, {useState} from "react";
import classes from "./Survey.module.css";
import Radio from "../../Components/Radio";
import Button from "../../Components/Button";

const Survey = () => {
    const [score, setScore] = useState({
        Programista: 0,
        Informatyk: 0,
        Teleinformatyk: 0,
        Elektronik: 0,
        Elektryk: 0,
        Mechatronik: 0,
    });
    const [result, setResult] = useState<any>([]);
    const getResult = () => {
        const currentScore = {...score};

        // @ts-ignore
        const firstAnswer = JSON.parse(document.querySelector('input[name="first"]:checked').value);
        // @ts-ignore
        const secondAnswer = JSON.parse(document.querySelector('input[name="second"]:checked').value);
        // @ts-ignore
        const thirdAnswer = JSON.parse(document.querySelector('input[name="third"]:checked').value);
        // @ts-ignore
        const fourthAnswer = JSON.parse(document.querySelector('input[name="fourth"]:checked').value);

        //@ts-ignore
        currentScore.Programista += firstAnswer.Programista + secondAnswer.Programista + thirdAnswer.Programista + fourthAnswer.Programista;
        //@ts-ignore
        currentScore.Informatyk += firstAnswer.Informatyk + secondAnswer.Informatyk + thirdAnswer.Informatyk + fourthAnswer.Informatyk;
        //@ts-ignore
        currentScore.Teleinformatyk += firstAnswer.Teleinformatyk + secondAnswer.Teleinformatyk + thirdAnswer.Teleinformatyk + fourthAnswer.Teleinformatyk;
        //@ts-ignore
        currentScore.Elektronik += firstAnswer.Elektronik + secondAnswer.Elektronik + thirdAnswer.Elektronik + fourthAnswer.Elektronik;
        //@ts-ignore
        currentScore.Elektryk += firstAnswer.Elektryk + secondAnswer.Elektryk + thirdAnswer.Elektryk + fourthAnswer.Elektryk;
        //@ts-ignore
        currentScore.Mechatronik += firstAnswer.Mechatronik + secondAnswer.Mechatronik + thirdAnswer.Mechatronik + fourthAnswer.Mechatronik;

        const threeMaxValues = Object.values(currentScore).sort((a, b) => b - a).slice(0, 3);
        const maxValue: string[][] = [];
        threeMaxValues.forEach((value) => {
            // @ts-ignore
            const max = Object.keys(currentScore).filter((key: any) => currentScore[key] === value);
            maxValue.push(max);
        });
        maxValue.pop();
        setScore(currentScore);
        setResult(maxValue);
    };


    const firstQuestion = [

        {
            label: "Matematyka",
            score: {
                Programista: 1,
                Informatyk: 1,
                Teleinformatyk: 1,
                Elektronik: 1,
                Elektryk: 1,
                Mechatronik: 1,
            }
        },
        {
            label: "Informatyka",
            score: {
                Programista: 1,
                Informatyk: 1,
                Teleinformatyk: 1,
                Elektronik: 0,
                Elektryk: 0,
                Mechatronik: 0,
            }
        },
        {
            label: "Fizyka",
            score: {
                Programista: 0,
                Informatyk: 0,
                Teleinformatyk: 0,
                Elektronik: 1,
                Elektryk: 1,
                Mechatronik: 2,
            }
        },
        {
            label: "Technika",
            score: {
                Programista: 0,
                Informatyk: 0,
                Teleinformatyk: 0.5,
                Elektronik: 1,
                Elektryk: 1,
                Mechatronik: 1,
            }
        },
        {
            label: "Języki obce",
            score: {
                Programista: 1,
                Informatyk: 1,
                Teleinformatyk: 1,
                Elektronik: 0,
                Elektryk: 0,
                Mechatronik: 1,
            }
        },
    ];

    const secondQuestion = [
        {
            label: "Sieci komputerowe",
            score: {
                Programista: 0,
                Informatyk: 1,
                Teleinformatyk: 1,
                Elektronik: 0,
                Elektryk: 0,
                Mechatronik: 0,
            }
        },
        {
            label: "Konfiguracja urządzeń telekomunikacyjnych (telefony, centrale)",
            score: {
                Programista: 0,
                Informatyk: 0,
                Teleinformatyk: 1,
                Elektronik: 0,
                Elektryk: 0,
                Mechatronik: 0,
            }
        },
        {
            label: "Konfiguracja systemów operacyjnych Windows i Linux",
            score: {
                Programista: 0,
                Informatyk: 1,
                Teleinformatyk: 1,
                Elektronik: 0,
                Elektryk: 0,
                Mechatronik: 0,
            }
        },
        {
            label: "Programowanie aplikacji mobilnych lub desktopowych",
            score: {
                Programista: 1,
                Informatyk: 0,
                Teleinformatyk: 0,
                Elektronik: 0,
                Elektryk: 0,
                Mechatronik: 0,
            }
        },
        {
            label: "Tworzenie stron internetowych",
            score: {
                Programista: 1,
                Informatyk: 1,
                Teleinformatyk: 0,
                Elektronik: 0,
                Elektryk: 0,
                Mechatronik: 0,
            }
        },
        {
            label: "Grafika komputerowa",
            score: {
                Programista: 0.5,
                Informatyk: 1,
                Teleinformatyk: 0,
                Elektronik: 0,
                Elektryk: 0,
                Mechatronik: 0,
            }
        },
        {
            label: "Programowanie sterowników, urządzeń elektronicznych",
            score: {
                Programista: 0,
                Informatyk: 0,
                Teleinformatyk: 0,
                Elektronik: 1,
                Elektryk: 0,
                Mechatronik: 1,
            }
        },
        {
            label: "Automatyka, mechanika",
            score: {
                Programista: 0,
                Informatyk: 0,
                Teleinformatyk: 0,
                Elektronik: 1,
                Elektryk: 1,
                Mechatronik: 1,
            }
        },
        {
            label: "Robotyka, urządzenia elektroniczne",
            score: {
                Programista: 0,
                Informatyk: 0,
                Teleinformatyk: 0,
                Elektronik: 1,
                Elektryk: 0,
                Mechatronik: 1,
            }
        },
    ];

    const thirdQuestion = [
        {
            label: "Praca zespołowa",
            score: {
                Programista: 1,
                Informatyk: 1,
                Teleinformatyk: 0,
                Elektronik: 0,
                Elektryk: 0,
                Mechatronik: 0,
            }
        },
        {
            label: "Indywidualna praca",
            score: {
                Programista: 0,
                Informatyk: 0,
                Teleinformatyk: 0,
                Elektronik: 1,
                Elektryk: 1,
                Mechatronik: 1,
            }
        },
        {
            label: "Praca w terenie",
            score: {
                Programista: 0,
                Informatyk: 0,
                Teleinformatyk: 1,
                Elektronik: 1,
                Elektryk: 1,
                Mechatronik: 1,
            }
        },
        {
            label: "Praca w stałym miejscu",
            score: {
                Programista: 1,
                Informatyk: 1,
                Teleinformatyk: 1,
                Elektronik: 1,
                Elektryk: 1,
                Mechatronik: 1,
            }
        },
        {
            label: "Praca na wysokości",
            score: {
                Programista: 0,
                Informatyk: 0,
                Teleinformatyk: 1,
                Elektronik: 0,
                Elektryk: 1,
                Mechatronik: 0,
            }
        },
        {
            label: "Praca przy komputerze",
            score: {
                Programista: 1,
                Informatyk: 1,
                Teleinformatyk: 1,
                Elektronik: 0,
                Elektryk: 0,
                Mechatronik: 0,
            }
        },
        {
            label: "Wykonywanie czynności manualnych (majsterkowanie)",
            score: {
                Programista: 0,
                Informatyk: 0,
                Teleinformatyk: 0,
                Elektronik: 1,
                Elektryk: 1,
                Mechatronik: 1,
            }
        },
    ];

    const fourthQuestion = [
        {
            label: "Prowadzić własną firmę",
            score: {
                Programista: 1,
                Informatyk: 1,
                Teleinformatyk: 1,
                Elektronik: 1,
                Elektryk: 1,
                Mechatronik: 1,
            }
        },
        {
            label: "Pracować dla kogoś",
            score: {
                Programista: 0,
                Informatyk: 1,
                Teleinformatyk: 1,
                Elektronik: 1,
                Elektryk: 0,
                Mechatronik: 1,
            }
        },
        {
            label: "Studiować",
            score: {
                Programista: 1,
                Informatyk: 0,
                Teleinformatyk: 1,
                Elektronik: 0,
                Elektryk: 0,
                Mechatronik: 1,
            }
        },
    ];

    return (
        <>
            <h1>Ankieta</h1>
            <p className={classes.p}>
                Nie wiesz jaki kierunek kształcenia obrać? Spróbujemy Ci w tym pomóc!
            </p>
            <div className={classes.question}>
                <p>
                    Jakie przedmioty z poniższych w szkole podstawowej lubiłeś
                    najbardziej?
                </p>
                <Radio values={firstQuestion} name="first"/>
            </div>
            <div className={classes.question}>
                <p>Które z poniższych zdań najlepiej opisuje twoje zainteresowania?</p>
                <Radio values={secondQuestion} name="second"/>
            </div>
            <div className={classes.question}>
                <p>W jakim środowisku pracy czujesz się najlepiej?</p>
                <Radio values={thirdQuestion} name="third"/>
            </div>
            <div className={classes.question}>
                <p>Po ukończeniu Technikum chciałbyś</p>
                <Radio values={fourthQuestion} name="fourth"/>
            </div>
            <div className={classes.result}>
                {result.length !== 0 ? (<div><p className={classes.p}>Najlepsze kierunki dla Ciebie to: </p>
                    {result.map((item: any) => {
                        return <div>
                            <p className={classes.p}>{item.join(', ')} </p>
                        </div>
                    })}</div>) : (<Button onClick={getResult} buttonText="Sprawdź kierunek dla Ciebie"/>)}
            </div>
        </>
    );
}

export default Survey;