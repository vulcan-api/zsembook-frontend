import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.css";

export const classMgmt = (className: any) => {
    switch (className) {
      case "alternate":
        return classes.alternate;
      case "gray":
        return classes.gray;
      case "gray disabled":
        return classes.grayDisabled;
      case "tooltip":
        return classes.default + " tooltip";
      default:
        return classes.default;
    }
}

const Button = (props:any) => {
  const sharedProps = {
    className: classes.button + " " + classMgmt(props.className),
    children: <>{props.icon}{props.buttonText || "debiluZapomniałeśWpisać"}</>
  }

    return (<>
      {props && props.destination ? 
      <Link to={props.destination} {...sharedProps}></Link> :
      <button
        tooltip-dsc={props.tooltipDsc}
        type={props.type || "button"}
        onClick={props.onClick}
        disabled={props.disabled}
        style={props.style}
        {...sharedProps}
      >
      </button> }</>
    );
}

export default Button;