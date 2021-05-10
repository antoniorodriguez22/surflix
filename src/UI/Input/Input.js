import React from "react";

import classes from "./Input.module.css";


const Input = (props) => (
    <div>
        <div className={classes.Component}>
            <label className={classes.Label}>{props.label}</label>
            <input 
                className={classes.Input}
                type={props.inputType} 
                name={props.name}
                placeholder={props.placeholder} 
                onClick={props.clicked}
                value={props.value}
                onChange={props.onChange}
                />
        </div>

    </div>

);

export default Input;