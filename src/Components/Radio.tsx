import classes from "./Radio.module.css";
import React, {useState} from "react";

const Radio = (props: any) => {
    let radioValues: any = props.values;
    const [selectedValue, setSelectedValue] = useState("");

    const handleSelectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };
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
                checked={selectedValue === value.value}
                onChange={handleSelectionChange}
            />
            <label htmlFor={value.id}>{value.label}</label>
          </span>
        );
    })}
  </span>;
};

export default Radio;
