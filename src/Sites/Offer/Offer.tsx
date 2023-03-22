import React from "react";
import Wrapper from "../../Layout/Wrapper";
import classes from "./Offer.module.css";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import elektryk from "./graphics/elektryk.png";
import elektronik from "./graphics/elektronik.png";
import programista from "./graphics/programista.svg";
import informatyk from "./graphics/informatyk.png";
import teleinformatyk from "./graphics/teleinformatyk.png";
import mechatronik from "./graphics/mechatronik.png";

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
            <img src={informatyk} alt="" />
            <p>
              Przedmioty realizowane na poziomie rozszerzonym:
              <ul>
                <li>Matematyka</li>
                <li>J. angielski</li>
              </ul>
            </p>
            <Link to={"/offer/informatyk"}>
              <Button buttonText="Więcej informacji" />
            </Link>
          </Wrapper>
          <Wrapper>
            <div>
              <h1>Technik Mechatronik</h1>
              <h2>1m, 1 oddział - 30 miejsc</h2>
            </div>
            <img src={mechatronik} alt="" />
            <p>
              Przedmioty realizowane na poziomie rozszerzonym:
              <ul>
                <li>Matematyka</li>
                <li>Fizyka</li>
              </ul>
            </p>
            <Link to={"/offer/mechatronik"}>
              <Button buttonText="Więcej informacji" />
            </Link>
          </Wrapper>
          <Wrapper>
            <div>
              <h1>Technik Programista</h1>
              <h2>1d, 1p, 2 oddziały - 60 miejsc</h2>
            </div>
            <img src={programista} alt="" />
            <p>
              Przedmioty realizowane na poziomie rozszerzonym:
              <ul>
                <li>Matematyka</li>
                <li>J. angielski</li>
              </ul>
            </p>
            <Link to={"/offer/programista"}>
              <Button buttonText="Więcej informacji" />
            </Link>
          </Wrapper>
          <Wrapper>
            <div>
              <h1>Technik Teleinformatyk</h1>
              <h2>1t, 1 oddział - 30 miejsc</h2>
            </div>
            <img src={teleinformatyk} alt="" />
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
            <Link to={"/offer/teleinformatyk"}>
              <Button buttonText="Więcej informacji" />
            </Link>
          </Wrapper>
          <Wrapper>
            <div>
              <h1>Technik Elektronik</h1>
              <h2>1g, 1 oddział - 30 miejsc</h2>
            </div>
            <img src={elektronik} alt="" />
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
            <Link to={"/offer/elektronik"}>
              <Button buttonText="Więcej informacji" />
            </Link>
          </Wrapper>
          <Wrapper>
            <div>
              <h1>Technik Elektryk</h1>
              <h2>1f, 1 oddział - 30 miejsc</h2>
            </div>
            <img src={elektryk} alt="" />
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
            <Link to={"/offer/elektryk"}>
              <Button buttonText="Więcej informacji" />
            </Link>
          </Wrapper>
        </div>
      </div>
    </>
  );
};

export default Offer;
