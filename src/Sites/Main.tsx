import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import classes from "./Main.module.css";
//@ts-ignore
import { executeTheme } from "../Lib/getUser";

const Main = (props: {removeWrapper?: boolean}) => {
  useEffect(() => {
    executeTheme();
  }, []);

  return (
    <>
      <div className={classes.flexRow}>
        <Sidebar />
        {props.removeWrapper && <Outlet />}
        {!props.removeWrapper && (
        <div className={classes.wrapper}>
          <Outlet />
        </div>
        )}
      </div>
    </>
  );
};

export default Main;
