import classes from "./Radio.module.css";
import React from "react";

const Radio = (props: any) => {
    let radioValues: any = props.values;

  return <span className={classes.main}>

    {radioValues.map((value: any) => {
        return (
          <span>
            <input
              type="radio"
              id={value.id}
              name={props.name}
              value={value.value}
              className={value.className}
            />
            <label htmlFor={value.id}>{value.label}</label>
          </span>
        );
    })}
  </span>;
};

export default Radio;
