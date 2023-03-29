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
        const firstAnswer = document.querySelector('input[name="first"]:checked').value;
        // @ts-ignore
        const secondAnswer = document.querySelector('input[name="second"]:checked').value;
        // @ts-ignore
        const thirdAnswer = document.querySelector('input[name="second"]:checked').value;
        // @ts-ignore
        const fourthAnswer = document.querySelector('input[name="second"]:checked').value;


        // @ts-ignore
        currentScore.Programista += firstQuestion.find((q) => q.value === firstAnswer).score.Programista
            // @ts-ignore
            + secondQuestion.find((q) => q.value === secondAnswer).score.Programista + thirdQuestion.find((q) => q.value === thirdAnswer).score.Programista + fourthQuestion.find((q) => q.value === fourthAnswer).score.Programista;
        // @ts-ignore
        currentScore.Informatyk += firstQuestion.find((q) => q.value === firstAnswer).score.Informatyk
            // @ts-ignore
            + secondQuestion.find((q) => q.value === secondAnswer).score.Informatyk + thirdQuestion.find((q) => q.value === thirdAnswer).score.Informatyk + fourthQuestion.find((q) => q.value === fourthAnswer).score.Informatyk;
        // @ts-ignore
        currentScore.Teleinformatyk += firstQuestion.find((q) => q.value === firstAnswer).score.Teleinformatyk
            // @ts-ignore
            + secondQuestion.find((q) => q.value === secondAnswer).score.Teleinformatyk + thirdQuestion.find((q) => q.value === thirdAnswer).score.Teleinformatyk + fourthQuestion.find((q) => q.value === fourthAnswer).score.Teleinformatyk;
        // @ts-ignore
        currentScore.Elektronik += firstQuestion.find((q) => q.value === firstAnswer).score.Elektronik
            // @ts-ignore
            + secondQuestion.find((q) => q.value === secondAnswer).score.Elektronik + thirdQuestion.find((q) => q.value === thirdAnswer).score.Elektronik + fourthQuestion.find((q) => q.value === fourthAnswer).score.Elektronik;
        // @ts-ignore
        currentScore.Elektryk += firstQuestion.find((q) => q.value === firstAnswer).score.Elektryk
            // @ts-ignore
            + secondQuestion.find((q) => q.value === secondAnswer).score.Elektryk + thirdQuestion.find((q) => q.value === thirdAnswer).score.Elektryk + fourthQuestion.find((q) => q.value === fourthAnswer).score.Elektryk;
        // @ts-ignore
        currentScore.Mechatronik += firstQuestion.find((q) => q.value === firstAnswer).score.Mechatronik
            // @ts-ignore
            + secondQuestion.find((q) => q.value === secondAnswer).score.Mechatronik + thirdQuestion.find((q) => q.value === thirdAnswer).score.Mechatronik + fourthQuestion.find((q) => q.value === fourthAnswer).score.Mechatronik;
        console.log(currentScore);
        const threeMaxValues = Object.values(currentScore).sort((a, b) => b - a).slice(0, 2);

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
            value: "Matematyka",
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
            value: "Informatyka",
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
            value: "Fizyka",
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
            value: "Technika",
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
            value: "Technika",
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
            value: "Programista",
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
            value: "Programista",
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
            value: "Programista",
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
            value: "Programista",
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
            value: "Programista",
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
            value: "Programista",
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
            value: "Programista",
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
            value: "Programista",
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
            value: "Programista",
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
            value: "Programista",
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
            value: "Informatyk",
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
            value: "Teleinformatyk",
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
            value: "Elektronik",
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
            value: "Elektronik",
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
            value: "Elektronik",
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
            value: "Elektronik",
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
            value: "Programista",
            label: "Prowadzić własną firmę",
            score: {
                Programista: 1,
                Informatyk: 1,
                Teleinformatyk: 1,
                Elektronik: 1,
                Elektryk: 0,
                Mechatronik: 1,
            }
        },
        {
            value: "Informatyk",
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
            value: "Teleinformatyk",
            label: "Studiować",
            score: {
                Programista: 2,
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
            <div>
                {result.length !== 0 ? (<div><p className={classes.p}>Najlepsze kierunki dla Ciebie to: </p>
                    {result.map((item : any) => {
                        return <div>
                            <p className={classes.p}>{item.join(', ')} </p>
                        </div>
                    })}</div>) : (<Button onClick={getResult} buttonText="Sprawdź kierunek dla Ciebie"/>)}
            </div>
        </>
    );
}

export default Survey;