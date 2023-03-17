import React from "react";
import Wrapper from "../../Layout/Wrapper";
import classes from "./Offer.module.css";

const Offer = () => {
  return (
    <>
      <div className={classes.main}>
        <h1>OFERTA REKRUTACYJNA ZSEM NA ROK SZKOLNY 2023/2024</h1>
        <p>
          Do wszystkich klas technikum przedmioty przeliczane na punkty
          rekrutacyjne to :
        </p>
        <p>Język Polski, matematyka, fizyka i język Angielski.</p>
        <div className={classes.offertItems}>
          <Wrapper>
            <div>
              <h1>Technik Informatyk</h1>
              <h2>1i, 1 oddział - 30 miejsc</h2>
            </div>
            <p>
              Przedmioty realizowane na poziomie rozszerzonym:
              <ul>
                <li>Matematyka</li>
                <li>J. angielski</li>
              </ul>
            </p>
            <p>Więcej informacji</p>
          </Wrapper>
          <Wrapper>
            <div>
              <h1>Technik Mechatronik</h1>
              <h2>1m, 1 oddział - 30 miejsc</h2>
            </div>
            <p>
              Przedmioty realizowane na poziomie rozszerzonym:
              <ul>
                <li>Matematyka</li>
                <li>Fizyka</li>
              </ul>
            </p>
            <p>Więcej informacji</p>
          </Wrapper>
          <Wrapper>
            <div>
              <h1>Technik Programista</h1>
              <h2>1d, 1p, 2 oddziały - 60 miejsc</h2>
            </div>
            <p>
              Przedmioty realizowane na poziomie rozszerzonym:
              <ul>
                <li>Matematyka</li>
                <li>J. angielski</li>
              </ul>
            </p>
            <p>Więcej informacji</p>
          </Wrapper>
          <Wrapper>
            <div>
              <h1>Technik Teleinformatyk</h1>
              <h2>1t, 1 oddział - 30 miejsc</h2>
            </div>
            <p className={classes.subjects}>
              Przedmioty realizowane na poziomie rozszerzonym:
              <ul>
                <li>Matematyka</li>
              </ul>
            </p>
            <div className={classes.new}>
              <p>Nowość !</p>
              <p>
                Specjalizacja: Cyberbezpieczeństwo w sieciach
                teleinformatycznych
              </p>
            </div>
            <p>Więcej informacji</p>
          </Wrapper>
          <Wrapper>
            <div>
              <h1>Technik Elektronik</h1>
              <h2>1g, 1 oddział - 30 miejsc</h2>
            </div>
            <p className={classes.subjects}>
              Przedmioty realizowane na poziomie rozszerzonym:
              <ul>
                <li>Matematyka</li>
              </ul>
            </p>
            <div className={classes.new}>
              <p>Nowość !</p>
              <p>Specjalizacja: Programowanie mikroprocesorów</p>
            </div>
            <p>Więcej informacji</p>
          </Wrapper>
          <Wrapper>
            <div>
              <h1>Technik Elektryk</h1>
              <h2>1f, 1 oddział - 30 miejsc</h2>
            </div>
            <p className={classes.subjects}>
              Przedmioty realizowane na poziomie rozszerzonym:
              <ul>
                <li>Matematyka</li>
              </ul>
            </p>
            <div className={classes.new}>
              <p>Nowość !</p>
              <p>Specjalizacja: Systemy inteligentnych budynków</p>
            </div>
            <p>Więcej informacji</p>
          </Wrapper>
        </div>
      </div>
    </>
  );
};

export default Offer;
