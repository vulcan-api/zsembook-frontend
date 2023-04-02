import React, { useState } from "react";
import classes from "./Survey.module.css";
import Radio from "../../Components/Radio";
import Button from "../../Components/Button";
import surveyClasses from "../Offer/Offer.module.css";
import Wrapper from "../../Layout/Wrapper";
import { Link } from "react-router-dom";
import elektryk from "../Offer/graphics/elektryk.png";
import elektronik from "../Offer/graphics/elektronik.png";
import programista from "../Offer/graphics/programista.svg";
import informatyk from "../Offer/graphics/informatyk.png";
import teleinformatyk from "../Offer/graphics/teleinformatyk.png";
import mechatronik from "../Offer/graphics/mechatronik.png";

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
    const currentScore: any = { ...score };
    const answerNames = ["first", "second", "third", "fourth"];

    const answerScores = answerNames.map((name) => {
      const answer = JSON.parse(
        (document.querySelector(`input[name="${name}"]:checked`) as any)?.value
      );
      return answer || {};
    });

    for (let field in currentScore) {
      currentScore[field] = answerScores.reduce((acc, answer) => {
        return acc + (answer[field] || 0);
      }, 0);
    }

    const maxValues = Object.entries(currentScore).sort((a: any, b: any) => {
      return b[1] - a[1];
    });

    const tempResult = [[maxValues[0][0]], [maxValues[1][0], maxValues[2][0]]];

    setScore(currentScore);
    setResult(tempResult);
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
      },
    },
    {
      label: "Informatyka",
      score: {
        Programista: 1,
        Informatyk: 1,
        Teleinformatyk: 1,
      },
    },
    {
      label: "Fizyka",
      score: {
        Elektronik: 1,
        Elektryk: 1,
        Mechatronik: 2,
      },
    },
    {
      label: "Technika",
      score: {
        Teleinformatyk: 0.5,
        Elektronik: 1,
        Elektryk: 1,
        Mechatronik: 1,
      },
    },
    {
      label: "Języki obce",
      score: {
        Programista: 1,
        Informatyk: 1,
        Teleinformatyk: 1,
        Mechatronik: 1,
      },
    },
  ];

  const secondQuestion = [
    {
      label: "Sieci komputerowe",
      score: {
        Informatyk: 1,
        Teleinformatyk: 1,
      },
    },
    {
      label: "Konfiguracja urządzeń telekomunikacyjnych (telefony, centrale)",
      score: {
        Teleinformatyk: 1,
      },
    },
    {
      label: "Konfiguracja systemów operacyjnych Windows i Linux",
      score: {
        Informatyk: 1,
        Teleinformatyk: 1,
      },
    },
    {
      label: "Programowanie aplikacji mobilnych lub desktopowych",
      score: {
        Programista: 1,
      },
    },
    {
      label: "Tworzenie stron internetowych",
      score: {
        Programista: 1,
        Informatyk: 1,
      },
    },
    {
      label: "Grafika komputerowa",
      score: {
        Programista: 0.5,
        Informatyk: 1,
      },
    },
    {
      label: "Programowanie sterowników, urządzeń elektronicznych",
      score: {
        Elektronik: 1,
        Mechatronik: 1,
      },
    },
    {
      label: "Automatyka, mechanika",
      score: {
        Elektronik: 1,
        Elektryk: 1,
        Mechatronik: 1,
      },
    },
    {
      label: "Robotyka, urządzenia elektroniczne",
      score: {
        Elektronik: 1,
        Mechatronik: 1,
      },
    },
  ];

  const thirdQuestion = [
    {
      label: "Praca zespołowa",
      score: {
        Programista: 1,
        Informatyk: 1,
      },
    },
    {
      label: "Indywidualna praca",
      score: {
        Elektronik: 1,
        Elektryk: 1,
        Mechatronik: 1,
      },
    },
    {
      label: "Praca w terenie",
      score: {
        Teleinformatyk: 1,
        Elektronik: 1,
        Elektryk: 1,
        Mechatronik: 1,
      },
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
      },
    },
    {
      label: "Praca na wysokości",
      score: {
        Teleinformatyk: 1,
        Elektryk: 1,
      },
    },
    {
      label: "Praca przy komputerze",
      score: {
        Programista: 1,
        Informatyk: 1,
        Teleinformatyk: 1,
      },
    },
    {
      label: "Wykonywanie czynności manualnych (majsterkowanie)",
      score: {
        Elektronik: 1,
        Elektryk: 1,
        Mechatronik: 1,
      },
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
      },
    },
    {
      label: "Pracować dla kogoś",
      score: {
        Informatyk: 1,
        Teleinformatyk: 1,
        Elektronik: 1,
        Mechatronik: 1,
      },
    },
    {
      label: "Studiować",
      score: {
        Programista: 1,
        Teleinformatyk: 1,
        Mechatronik: 1,
      },
    },
  ];

  const profilesInfo = {
    Programista: {
      classes: ["1d", "1p"],
      extendedLevel: ["Matematyka", "J. angielski"],
      img: programista,
    },
    Informatyk: {
      classes: ["1i"],
      extendedLevel: ["Matematyka", "J. angielski"],
      img: informatyk,
    },
    Teleinformatyk: {
      classes: ["1t"],
      extendedLevel: ["Matematyka"],
      new: "Specjalizacja: Cyberbezpieczeństwo w sieciach teleinformatycznych",
      img: teleinformatyk,
    },
    Elektronik: {
      classes: ["1g"],
      extendedLevel: ["Matematyka"],
      new: "Specjalizacja: Programowanie mikroprocesorów",
      img: elektronik,
    },
    Elektryk: {
      classes: ["1f"],
      extendedLevel: ["Matematyka"],
      new: "Specjalizacja: Systemy inteligentnych budynków",
      img: elektryk,
    },
    Mechatronik: {
      classes: ["1m"],
      extendedLevel: ["Matematyka", "Fizyka"],
      img: mechatronik,
    },
  };

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
        <Radio values={firstQuestion} name="first" />
      </div>
      <div className={classes.question}>
        <p>Które z poniższych zdań najlepiej opisuje twoje zainteresowania?</p>
        <Radio values={secondQuestion} name="second" />
      </div>
      <div className={classes.question}>
        <p>W jakim środowisku pracy czujesz się najlepiej?</p>
        <Radio values={thirdQuestion} name="third" />
      </div>
      <div className={classes.question}>
        <p>Po ukończeniu Technikum chciałbyś</p>
        <Radio values={fourthQuestion} name="fourth" />
      </div>
      <div className={classes.result}>
        {result.length !== 0 ? (
          <div>
            <p className={classes.p} onClick={() => console.log(result)}>
              Najlepsze kierunki dla Ciebie to:{" "}
            </p>
            <div className={surveyClasses.offertItems}>
              {result[0].map((item: any, index: number) => {
                let profile: any = (profilesInfo as any)[item];
                return (
                  <Wrapper key={index}>
                    <div>
                      <h1>Technik {item}</h1>
                      {profile.classes.length === 1 ? (
                        <h2>{profile.classes[0]}, 1 oddział - 32 miejsca</h2>
                      ) : (
                        <h2>
                          {profile.classes[0] +
                            ", " +
                            profile.classes[1] +
                            ", "}
                          2 oddziały - 64 miejsca
                        </h2>
                      )}
                    </div>
                    <img src={profile.img} alt="" />
                    <p className={surveyClasses.subjects}>
                      Przedmioty realizowane na poziomie rozszerzonym:
                    </p>
                    <ul>
                      {profile.extendedLevel.map((item: any, index: number) => {
                        return <li key={index}>{item}</li>;
                      })}
                    </ul>
                    {profile.new && (
                      <div className={surveyClasses.new}>
                        <p>Nowość !</p>
                        <p>{profile.new}</p>
                      </div>
                    )}
                    <Link to={`/offer/${item.toLowerCase()}`}>
                      <Button buttonText="Więcej informacji" />
                    </Link>
                  </Wrapper>
                );
              })}
              {result[1].map((item: any, index: number) => {
                let profile: any = (profilesInfo as any)[item];
                return (
                  <Wrapper key={index} style={result[1][1] === item ? {marginBottom : "6rem"} : {}}>
                    <div>
                      <h1>Technik {item}</h1>
                      {profile.classes.length === 1 ? (
                        <h2>{profile.classes[0]}, 1 oddział - 32 miejsca</h2>
                      ) : (
                        <h2>
                          {profile.classes[0] +
                            ", " +
                            profile.classes[1] +
                            ", "}
                          2 oddziały - 64 miejsca
                        </h2>
                      )}
                    </div>
                    <img src={profile.img} alt="" />
                    <p className={surveyClasses.subjects}>
                      Przedmioty realizowane na poziomie rozszerzonym:
                    </p>
                    <ul>
                      {profile.extendedLevel.map((item: any, index: number) => {
                        return <li key={index}>{item}</li>;
                      })}
                    </ul>
                    {profile.new && (
                      <div className={surveyClasses.new}>
                        <p>Nowość !</p>
                        <p>{profile.new}</p>
                      </div>
                    )}
                    <Link to={`/offer/${item.toLowerCase()}`}>
                      <Button buttonText="Więcej informacji" />
                    </Link>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        ) : (
          <Button
            onClick={getResult}
            buttonText="Sprawdź kierunek dla Ciebie"
          />
        )}
      </div>
    </>
  );
};

export default Survey;
