import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../Layout/Wrapper";
import User from "../../Lib/User";
import * as Icon from "react-bootstrap-icons";
import classes from "./Homepage.module.css";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import photo1 from "./Photos/1.jpg";
import photo2 from "./Photos/2.jpg";
import photo3 from "./Photos/3.jpg";
import photo4 from "./Photos/4.jpg";
import photo5 from "./Photos/5.jpg";
import photo6 from "./Photos/6.jpg";
import photo7 from "./Photos/7.jpg";
import photo8 from "./Photos/8.jpg";

const Homepage = () => {
  const navigate = useNavigate();
  const sliderRef = useRef<any>(null);
  const [slideWidth, setSlideWidth] = useState<number>(0);

  const isMobile = /Mobile/.test(navigator.userAgent);

  useEffect(() => {
    if (!sessionStorage.getItem("firstEnter")) {
      sessionStorage.setItem("firstEnter", "1");
      navigate("/offer");
    }
  }, [navigate]);

  useLayoutEffect(() => {
    setSlideWidth(sliderRef.current.offsetWidth * -1);
  }, []);

  const slidesContainer: any = document.getElementById("slides-container");

  return (
    <>
      <div>
        <h1>
          {User.isLogged
            ? `Witaj ${User.data.name} ${User.data.surname}!`
            : `Witaj na ZSEMBook!`}
        </h1>
      </div>
      <Wrapper
        className={classes.zsemDesc}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Zespół Szkół Elektryczno - Mechanicznych w Nowym Sączu</h2>
        <p className={classes.schoolDesc}>
          Zespół Szkół Elektryczno-Mechanicznych w Nowym Sączu to renomowana
          placówka edukacyjna, która oferuje szeroki wybór kierunków
          technicznych oraz informatycznych. Wszystkie sale wyposażone są w
          specjalne narzędzia i urządzenia, co umożliwia skuteczne kształcenie.
          ZSEM w Nowym Sączu oferuje również wiele możliwości rozwoju osobistego
          i kulturalnego. W szkole organizowane są rozmaite inicjatywy, na
          przykład takie jak:
        </p>
        <ul className={classes.descList}>
          <li>Konkursy w różncych dziedzinach</li>
          <li>Olimpiady z możliwością wygrania atrakcyjnych nagród</li>
          <li>
            Rajd Elektryka, wydarzenie organizowane co roku, w okolicach jesieni
          </li>
          <li>Wspólne imprezy we współpracy z innymi szkołami</li>
          <li>Debaty naukowe</li>
        </ul>
        <p className={classes.schoolDesc}>
          O innych inicjatywach przeczytasz w zakładce "Wydarzenia".
          Podsumowując, nie trać czasu! Już dziś zapoznaj się z{" "}
          <Link to="/offer" className={classes.offerLink}>
            ofertą ZSEM
          </Link>
          !
        </p>
        <div className={classes.caroseul}>
          <button
            className={`${classes.slideArrow} ${classes.slideArrowPrev}`}
            onClick={() => {
              if (slidesContainer.scrollLeft === 0) {
                slidesContainer.scrollLeft -= slideWidth * 8;
              } else {
                slidesContainer.scrollLeft += slideWidth;
              }
            }}
          >
            &#8249;
          </button>
          <button
            className={`${classes.slideArrow} ${classes.slideArrowNext}`}
            onClick={() => {
              if (
                slidesContainer.scrollLeft ===
                slidesContainer.scrollWidth - slidesContainer.clientWidth
              ) {
                slidesContainer.scrollLeft += slideWidth * 8;
              } else {
                slidesContainer.scrollLeft -= slideWidth;
              }
            }}
          >
            &#8250;
          </button>
          <ul
            className={classes.slidesContainer}
            id="slides-container"
            ref={sliderRef}
          >
            <img className={classes.slide} src={photo1} alt="zdj1" />
            <img className={classes.slide} src={photo2} alt="zdj2" />
            <img className={classes.slide} src={photo3} alt="zdj3" />
            <img className={classes.slide} src={photo4} alt="zdj4" />
            <img className={classes.slide} src={photo5} alt="zdj5" />
            <img className={classes.slide} src={photo6} alt="zdj6" />
            <img className={classes.slide} src={photo7} alt="zdj7" />
            <img className={classes.slide} src={photo8} alt="zdj8" />
          </ul>
        </div>
        <Button
          buttonText="Wizytówka ZSEM"
          icon={<Icon.Youtube />}
          className={classes.zsemVideo}
          onClick={() => {
            if (isMobile) {
              window.location.replace(
                "https://www.youtube.com/watch?v=yG12VjDxQfc"
              );
            } else {
              window.open(
                "https://www.youtube.com/watch?v=yG12VjDxQfc",
                "_blank"
              );
            }
          }}
        />
        <p>
          Nie wiesz jaki kierunek kształcenia obrać? Spróbujemy ci w tym pomóc!
          Kliknij poniżej.
        </p>
        <Link to="/survey">
          <Button buttonText="Ankieta" icon={<Icon.UiRadios />} />
        </Link>
      </Wrapper>
      <Wrapper>
        <h2>Autorzy</h2>
        <p className={classes.centerOnPhone}>
          Wykonane przez uczniów klasy 2D ZSEM w Nowym Sączu
          <ul className={classes.authors}>
            <li>
              <Link to="https://github.com/BaderBC" target={"_blank"}>
                Bartłomiej Strama
              </Link>
            </li>
            <li>
              <Link to="https://github.com/sewe2000" target={"_blank"}>
                Seweryn Pajor
              </Link>
            </li>
            <li>
              <Link to="https://github.com/Majkipl27" target={"_blank"}>
                Tomasz Mamala
              </Link>
            </li>
            <li>
              <Link to="https://github.com/maxidragon" target={"_blank"}>
                Maksymilian Gala
              </Link>
            </li>
            <li>
              <Link to="https://github.com/cooligus" target={"_blank"}>
                Tomasz Kulig
              </Link>
            </li>
            <Link to="https://github.com/avorty" target={"_blank"}>
              <Icon.Github fontSize="48px" />
              avorty
            </Link>
          </ul>
        </p>
      </Wrapper>
    </>
  );
};

export default Homepage;
