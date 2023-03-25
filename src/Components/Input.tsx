import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props: any, ref:any) => {
  return (
    <input
      type={props.type || "text"}
      value={props.value}
      ref={ref}
      required={props.required}
      onChange={props.onChange}
      defaultValue={props.defaultValue} 
      placeholder={props.placeholder || "debiluZapomniałeśWpisać"}
      className={
        props.className === "alternate"
          ? classes.input + " " + classes.alternate
          : classes.input + " " + classes.default
      }
    />
  );
});

export default Input;
