import React from "react";
import classes from "./Survey.module.css";
import Radio from "../../Components/Radio";

const Survey = () => {
    const firstQuestion = [
      {
        value: "Informatyka",
        label: "Informatyka",
      },
      {
        value: "Matematyka",
        label: "Matematyka",
      },
      {
        value: "Fizyka",
        label: "Fizyka",
      },
      {
        value: "Technika",
        label: "Technika",
      },
    ];

    const secondQuestion = [
      {
        value: "Programista",
        label: "Rozwiązywanie zagadnień matematycznych",
      },
      {
        value: "Informatyk",
        label: "Praca przy komputerze",
      },
      {
        value: "Mechatronik",
        label: "Urządzenia elektroniczne",
      },
      {
        value: "Teleinformatyk",
        label: "Sieci komputerowe",
      },
    ];

    const thirdQuestion = [
      {
        value: "Programista",
        label: "Praca zespołowa",
      },
      {
        value: "Informatyk",
        label: "Indywidualna praca",
      },
      {
        value: "Teleinformatyk",
        label: "Praca w terenie",
      },
      {
        value: "Elektronik",
        label: "Praca w laboratorium",
      },
    ];

    const fourthQuestion = [
      {
        value: "Programista",
        label: "Możliwość rozwoju zawodowego",
      },
      {
        value: "Informatyk",
        label: "Stabilność zatrudnienia",
      },
      {
        value: "Teleinformatyk",
        label: "Wysokie wynagrodzenie",
      },
      {
        value: "Elektronik",
        label: "Satysfakcja z wykonywanej pracy",
      },
    ];

    return (
      <>
        <h1>Ankieta</h1>
        <p className={classes.p}>
          Nie wiesz jaki kierunek kształcenia obrać? Spróbujemy ci w tym pomóc!
        </p>
        <div className={classes.question}>
          <p>
            Jakie przedmioty z poniższych w szkole podstawowej lubiłeś
            najbardziej?
          </p>
          <Radio values={firstQuestion} name="first" />
        </div>
        <div className={classes.question}>
          <p>Które z poniższych zagadnień interesują cię najbardziej?</p>
          <Radio values={secondQuestion} name="second" />
        </div>
        <div className={classes.question}>
          <p>W jakim środowisku pracy czujesz się najlepiej?</p>
          <Radio values={thirdQuestion} name="third" />
        </div>
        <div className={classes.question}>
          <p>Co jest dla Ciebie najważniejsze w wyborze przyszłego zawodu?</p>
          <Radio values={fourthQuestion} name="fourth" />
        </div>
      </>
    );
}

export default Survey;