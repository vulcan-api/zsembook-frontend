import React, { useEffect, useCallback } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import classes from "./Main.module.css";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import {NotificationManager} from "react-notifications";

const Main = (props: {removeWrapper?: boolean}) => {
  const navigate = useNavigate();

  const fetchPosts = useCallback(async () => {
    await fetch("http://localhost:3000/spotted/post", {
      method: "GET",
      credentials: "include",
    })
      .then(res => {
        if (!res.ok) throw new Error('nie zalogowano');
        return res;
      })
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
        navigate("/auth/login");
        NotificationManager.error(
          "Nie udało się zalogować. Sprawdź poprawność danych",
          "Nie zalogowano",
          3000
        );
        return;
      });
  }, [navigate]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <>
      <div className={classes.flexRow}>
        <Sidebar />
        <div className={props.removeWrapper || classes.wrapper}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Main;
