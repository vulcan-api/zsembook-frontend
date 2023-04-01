import React, {useState, useEffect, useCallback, useLayoutEffect, useRef} from "react";
import Wrapper from "../../Layout/Wrapper";
import User from "../../Lib/User";
import LoadingSpinner from "../../Components/LoadingSpinner";
import * as Icon from "react-bootstrap-icons";
//@ts-ignore
import {NotificationManager} from "react-notifications";
import classes from "../Spotted/Spotted.module.css";
import {useNavigate} from "react-router-dom";
import Button from "../../Components/Button";
import {Link} from "react-router-dom";
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
    const [isLoading, setIsLoading] = useState(false);
    const [showMorePostsButton, setShowMorePostsButton] = useState(true);
    const [posts, setPosts] = useState([
        {
            id: 69,
            createdAt: new Date("2023-02-06T19:21:38.727Z"),
            author: {
                id: 4,
                username: "",
            },
            title: "Lekcja z symfony u stopiarza",
            text: "Chciałem się pochwalić że prowadziłem lekcje u stopiarza",
            isAnonymous: false,
            isLiked: false,
            likes: 69,
            username: "jajco",
        },
    ]);
    const sliderRef = useRef<any>(null);
    const [slideWidth, setSlideWidth] = useState<number>(0);

    const isMobile = /Mobile/.test(navigator.userAgent);

    const getPosts = useCallback(async () => {
        setIsLoading(true);
        try {
            await fetch(
                `${process.env.REACT_APP_REQUEST_URL}/spotted/post?postTake=4`,
                {
                    method: "GET",
                    credentials: "include",
                }
            )
                .then((res) => res.json())
                .then(setPosts);
        } catch (error) {
            console.error(error);
        }

        posts.length < 1 ? setShowMorePostsButton(false) : <></>;

        setIsLoading(false);
    }, [posts.length]);

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    function likeHandler(post: any) {
        let postsCopy = [...posts];
        let index = postsCopy.indexOf(post);
        if (posts[index].isLiked) {
            posts[index].isLiked = false;
            posts[index].likes -= 1;
            unlike(posts[index].id);
            setPosts(postsCopy);
        } else {
            posts[index].isLiked = true;
            posts[index].likes += 1;
            like(posts[index].id);
            setPosts(postsCopy);
            NotificationManager.success("Udało się polubić post.", "Sukces!", 3000);
        }
    }

    const like = async (id: Number) => {
        await fetch(
            `${process.env.REACT_APP_REQUEST_URL}/spotted/post/${id}/like`,
            {
                method: "POST",
                credentials: "include",
            }
        )
            .then((res) => res.json())
            .catch((err) => {
                console.error(err);
            });
    };

    const unlike = async (id: Number) => {
        await fetch(
            `${process.env.REACT_APP_REQUEST_URL}/spotted/post/${id}/unlike`,
            {
                method: "POST",
                credentials: "include",
            }
        )
            .then((res) => res.json())
            .catch((err) => {
                console.error(err);
            });
    };

    useLayoutEffect(() => {
        setSlideWidth(sliderRef.current.offsetWidth * -1);
    }, []);

    const slidesContainer: any = document.getElementById("slides-container");

    return (
      <>
        {isLoading && <LoadingSpinner />}
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
            związanych z techniką i elektroniką. Szkoła znajduje się w centrum
            miasta Nowego Sącza. Uczniowie mają do wyboru wiele kierunków
            kształcenia, takich jak programowanie, teleinformatyka, informatyka
            lub mechatronika. Szkoła posiada specjalne sale do nauki przedmiotów
            zawodowych, w których uczniowie mogą ćwiczyć praktyczne
            umiejętności. Wszystkie sale wyposażone są w specjalne narzędzia i
            urządzenia, co umożliwia skuteczne kształcenie. Nauczyciele są
            wysoko wykwalifikowani i posiadają doświadczenie w branży, co
            pozwala na dostosowanie programu nauczania do potrzeb rynku pracy.
            Zespół Szkół Elektryczno-Mechanicznych w Nowym Sączu oferuje również
            wiele możliwości rozwoju osobistego i kulturalnego. W szkole
            organizowane są różne inicjatywy, o których można przeczytać w
            zakładce "Wydarzenia". Podsumowując, nie czekaj! Już dziś zapoznaj
            się z ofertą ZSEM!
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
            Nie wiesz jaki kierunek kształcenia obrać? Spróbujemy ci w tym
            pomóc! Kliknij poniżej.
          </p>
          <Link to="/survey">
            <Button buttonText="Ankieta" icon={<Icon.UiRadios />} />
          </Link>
        </Wrapper>
        <Wrapper>
          <h2>Spotted</h2>
          {!isLoading && Array.isArray(posts) ? (
            <>
              <p className={classes.centerOnPhone}>Proponowane posty</p>
              <div className={classes.posts}>
                {posts.map((post) => {
                  return (
                    <Wrapper
                      className={`${classes.post} ${classes.narrowContainer}`}
                      key={post.id}
                    >
                      <div className={classes.topData}>
                        {post.isAnonymous ? (
                          <div>
                            <Icon.PersonFill />
                            <p>
                              {post.isAnonymous
                                ? "Anonim"
                                : post.author.username}
                            </p>
                          </div>
                        ) : (
                          <div>
                            <Link
                              to={`/profile/${
                                post.isAnonymous ? 0 : post.author.id
                              }`}
                            >
                              <Icon.PersonFill />
                              <p>
                                {post.isAnonymous
                                  ? "Anonim"
                                  : post.author.username}
                              </p>
                            </Link>
                          </div>
                        )}
                        <div>
                          <Icon.CalendarDate />
                          {new Date(post.createdAt).toLocaleDateString()}
                        </div>
                        <div>
                          <Icon.Clock />
                          {new Date(post.createdAt).getUTCHours() + ":"}
                          {new Date(post.createdAt).getUTCMinutes() < 10
                            ? "0" + new Date(post.createdAt).getUTCMinutes()
                            : new Date(post.createdAt).getUTCMinutes()}
                        </div>
                      </div>
                      <div className={classes.content}>{post.text}</div>
                      <div className={classes.bottomData}>
                        <div
                          onClick={() => {
                            likeHandler(post);
                          }}
                        >
                          {post.isLiked && (
                            <Icon.HeartFill
                              style={{ color: "var(--add1-500)" }}
                            />
                          )}
                          {!post.isLiked && <Icon.Heart />}
                          <p
                            style={
                              post.isLiked ? { color: "var(--add1-500)" } : {}
                            }
                          >
                            {post.likes}
                          </p>
                        </div>
                      </div>
                    </Wrapper>
                  );
                })}
                {showMorePostsButton && (
                  <div className={classes.loadMoreButton}>
                    <Button
                      buttonText="Więcej postów"
                      onClick={() => navigate("/spotted")}
                    />
                  </div>
                )}
              </div>
            </>
          ) : (
            <p>Brak postów do wyświetlenia</p>
          )}
          {posts.length < 1 && (
            <p className={classes.p}>Brak postów do wyświetlenia</p>
          )}
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
              <Link to="https://github.com/Nasz-Elektryk" target={"_blank"}>
                <Icon.Github fontSize="48px"/>
                Organizacja github "Nasz-Elektryk"
              </Link>
            </ul>
          </p>
        </Wrapper>
      </>
    );
};

export default Homepage;
