import React, {useRef, useEffect} from "react";
import Input from "../../../Components/Input";
import Checkbox from "../../../Components/Checkbox";
import classes from "./Login.module.css";
import Button from "../../../Components/Button";
import loginImg from "./Graphics/loginImg.png";
import {Link, useNavigate} from "react-router-dom";
//@ts-ignore
import {NotificationManager} from "react-notifications";
import User from "../../../Lib/User";
import ReactFacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import {Facebook} from 'react-bootstrap-icons';

const Login = () => {
    const navigate = useNavigate();
    const emailRef: any = useRef();
    const passwordRef: any = useRef();
    const remeberPasswordRef: any = useRef();
    const isMobile = /Mobile/.test(navigator.userAgent);

    useEffect(() => {
        fetchPosts();
    })

    const fetchPosts = async () => {
        const throwObject = {};
        await fetch(`${process.env.REACT_APP_REQUEST_URL}/spotted/post`, {
            method: "GET",
            credentials: "include",
        })
            .then((res) => res.json())
            .then(() => {
                logout();
            })
            .catch((err) => {
                console.error(err);
                return throwObject;
            });
    };

    const logout = () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        fetch(`${process.env.REACT_APP_REQUEST_URL}/auth/logout`, {
            method: "POST",
            headers: myHeaders,
            redirect: "follow",
            credentials: "include",
        })
            .then((response) => response.text())
            .catch((error) => console.log("error", error));
    };

    const loginHandler = async (event: any) => {
        event.preventDefault();
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
        });

        const response = await fetch(`${process.env.REACT_APP_REQUEST_URL}/auth/login`, {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
            credentials: "include",
        })
            .then((res) => res.json())
            .catch((error) => {
                console.log("error", error)
                NotificationManager.error(
                    "Nie udało się zalogować. Spróbuj ponownie później",
                    "Nie zalogowano",
                    3000
                );
            });
        if (response.token) {
            User.getUser();
            navigate("/");
        } else {
            NotificationManager.error(
              "Nie udało się zalogować. Sprawdź poprawność danych.",
              "Wystąpił błąd",
              3000
            );
        }
    };

    const facebookLoginHandler = (response: object) => {
        fetch(`${process.env.REACT_APP_REQUEST_URL}/oauth/facebook/callback`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            credentials: "include",
            body: JSON.stringify(response),
        }).then((res) => {
            if(!res.ok) {
                NotificationManager.error(
                    "Nie udało się zalogować przez Facebooka. Spróbuj ponownie później",
                    "Nie zalogowano",
                    3000
                );
                throw new Error('Cannot login with facebook');
            }
            return res.json();
        }).then((json) => {
            if(json.token) {
                User.getUser();
                console.log(User);
                navigate("/");
            }
        })
        .catch((errorMsg) => {
            throw new Error("Couldn't resolve facebook login promise: " + errorMsg);
        });
    };

    return (
      <div className={classes.loginFlex}>
        <div className={classes.img}></div>
        <div className={classes.formSide}>
          <div className={classes.loginForm}>
            <p>Zaloguj się</p>
            <img src={loginImg} alt="cool login img" />
            <form onSubmit={loginHandler} className={classes.form}>
              <Input placeholder="E-Mail" ref={emailRef} type="email" />
              <Input type="password" placeholder="Hasło" ref={passwordRef} />
              <p onClick={() => navigate("/auth/reset")}>
                Nie pamiętasz hasła?
              </p>
              <Checkbox
                ref={remeberPasswordRef}
                id="passwordRemember"
                label="Zapamiętaj hasło"
              />
              <Button type="submit" buttonText="Zaloguj się" />
              <ReactFacebookLogin
                appId={process.env.REACT_APP_FB_ID ?? ""}
                fields="name,email,id"
                render={(renderProps) => (
                  <Button
                    onClick={renderProps.onClick}
                    className="facebook"
                    buttonText={
                      <>
                        <Facebook
                          fontSize={isMobile ? "40px" : "32px"}
                        />
                        <span>Zaloguj się przez Facebooka</span>
                      </>
                    }
                  />
                )}
                callback={(response) => facebookLoginHandler(response)}
              />
            </form>
            <Link to={"/auth/signup"}>Nie masz konta? Zarejestruj się!</Link>
            <p onClick={() => navigate("/")}>Kontynuuj bez logowania</p>
          </div>
        </div>
      </div>
    );
};

export default Login;
