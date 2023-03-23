import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./LinkSection.module.css";
import LinkBase, { LinkBaseType } from "./LinkBase";
import User from "../Lib/User";

interface LinkProperties extends LinkBaseType {
  destination?: string,
  onClick?: any,
  mobileOnly?: boolean,
  colored?: boolean,
  usersOnly?: boolean,
}

const LinkSection = (props: {
  className?: string;
  elements: LinkProperties[];
}) => {
  return (
    <>
      <ul className={`${classes.linkList} ${props.className}`}>
        {props.elements.map((item, index) => {
          const logged = (item.usersOnly && User.isLogged) || !item.usersOnly;
          return (
            <li
              key={index + 1}
              className={`${item.mobileOnly ? classes.mobile : ""}`}
            >
              {item.destination ? (
                <NavLink
                  to={logged ? item.destination : "/auth/login"}
                  className={`${classes.link} ${logged ? "" : classes.tooltip}`}
                  tooltip-dsc={logged ? "" : "Zaloguj się, aby uzyskać dostęp"}
                  tooltip-bottom={logged ? "" : "50%"}
                  style={({ isActive }) =>
                    isActive
                      ? { color: "var(--add1-500)" }
                      : { color: "var(--add2-500)" }
                  }
                  onClick={item.onClick}
                >
                  <LinkBase icon={item.icon} label={item.label} />
                </NavLink>
              ) : (
                <div
                  className={`${classes.link} ${classes.clickable} ${
                    item.colored ? classes.selected : ""
                  }`}
                  onClick={item.onClick}
                >
                  <LinkBase icon={item.icon} label={item.label} />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default LinkSection;
