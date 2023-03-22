import React, { useRef, useState } from "react";
import LinkSection from "../Components/LinkSection";
import * as Icon from "react-bootstrap-icons";
import classes from "./Sidebar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
//@ts-ignore
import { NotificationManager } from "react-notifications";
import Searchbar from "../Components/Searchbar";
import User from "../Lib/User";

const Sidebar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isShown, setIsShown] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch("http://localhost:3000/auth/logout", {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
      credentials: "include",
    })
      .then((response) => response.text())
      .then(() => {
        NotificationManager.success("Udało się wylogować.", "Wylogowano", 3000);
        navigate("/auth/login");
      })
      .catch((error) => console.log("error", error));
  };

  window.addEventListener("keydown", (ev) => {
    ev.key === "Escape" && searchHandler();
  });

  const searchHandler = () => {
    setIsSearching(!isSearching);
  };

  let loginOrLogout =
    User.isLoggined
      ? {
          label: "Wyloguj się",
          icon: <Icon.DoorOpenFill />,
          onClick: () => {
            logout();
            setIsShown(false);
          },
        }
      : {
          label: "Zaloguj się",
          icon: <Icon.DoorClosedFill />,
          onClick: () => {
            logout();
            setIsShown(false);
          },
        };

  return (
    <>
      <div
        className={isSearching ? classes.hide : classes.disable}
        onClick={searchHandler}
      ></div>
      <Searchbar
        sidebarWidth={ref.current?.offsetWidth}
        isSearching={isSearching}
        onResClick={searchHandler}
      />
      <div className={classes.navbar} ref={ref}>
        <div className={classes.mainLogo}>
          <NavLink to="/">
            <h1>ZSEMBook</h1>
          </NavLink>
        </div>
        <div>
          <div>
            <LinkSection
              className={classes.mainIcons}
              elements={[
                {
                  destination: "/",
                  label: "",
                  mobileOnly: true,
                  icon: <Icon.HouseFill />,
                },
                {
                  icon: <Icon.Search />,
                  label: "Szukaj",
                  colored: isSearching,
                  onClick: searchHandler,
                },
                {
                  destination: "/spotted",
                  label: "Spotted",
                  icon: <Icon.ChatRightDotsFill />,
                },
                {
                  destination: "/offer",
                  label: "Oferta",
                  icon: <Icon.FolderFill />,
                },
                {
                  destination: "/events",
                  label: "Wydarzenia",
                  icon: <Icon.CardChecklist />,
                },
                {
                  destination: "/walk",
                  label: "Szkoła",
                  icon: <Icon.BuildingFill />,
                },
                {
                  destination: "/faq",
                  label: "FAQ",
                  icon: <Icon.QuestionCircleFill />,
                },
                {
                  label: "",
                  mobileOnly: true,
                  icon: <Icon.List />,
                  onClick: () => {
                    setIsShown(!isShown);
                  },
                },
              ]}
            />
          </div>
        </div>
        <div>
          <LinkSection
            className={isShown ? classes.show : classes.hidden}
            elements={[
              {
                destination:
                    User.isLoggined
                    ? `/profile/${User.data.id}`
                    : "/auth/login",
                label: "Profil",
                icon: <Icon.PersonCircle />,
                usersOnly: true,
                onClick: () => {
                  setIsShown(false);
                },
              },
              {
                destination:
                    User.isLoggined
                    ? `/settings`
                    : "/auth/login",
                label: "Ustawienia",
                icon: <Icon.Tools />,
                usersOnly: true,
                onClick: () => {
                  setIsShown(false);
                },
              },
              loginOrLogout,
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
