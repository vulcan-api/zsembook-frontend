import classes from "./Radio.module.css";
import React from "react";

const Radio = (props: any) => {
  return (
    <div className={classes.main}>
      {props.values.map((value: any, index: number) => {
        const score = value.score;
        return (
          <div key={index}>
            <input
              type="radio"
              id={`${props.name}${index}`}
              name={props.name}
              value={JSON.stringify(score)}
              className="radio"
            />
            <label htmlFor={`${props.name}${index}`}>{value.label}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Radio;
