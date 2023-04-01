import classes from "./Radio.module.css";
import React, {useState} from "react";

const Radio = (props: any) => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleSelectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };
    return <span className={classes.main}>
     {props.values.map((value: any, index: number) => {
         const score = value.score;
         return (
             <span key={index}>
            <input
                type="radio"
                id={`${props.name}${index}`}
                name={props.name}
                value={JSON.stringify(score)}
                className="radio"
                checked={selectedValue === JSON.stringify(score)}
                onChange={handleSelectionChange}
            />
            <label htmlFor={`${props.name}${index}`}>{value.label}</label>
          </span>
         );
     })}
  </span>;
};

export default Radio;
