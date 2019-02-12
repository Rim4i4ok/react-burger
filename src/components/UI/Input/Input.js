import React from 'react';

import classes from './Input.css';

const input = (props) => {

    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                className={classes.ImputElement} 
                {...props.elementConfig} 
                value={props.value} />;
            break;

        case ('textarea'):
            inputElement = <textarea 
                className={classes.ImputElement} 
                {...props.elementConfig} 
                value={props.value} />;
            break;

        case ('select'):
            inputElement = (
                <select 
                    key={props.value}
                    className={classes.ImputElement}                      
                    value={props.value}>
                    {
                        props.elementConfig.options.map(option => (
                            <option value={option.value}>
                                {option.displayValue}                                                            
                            </option>
                        ))
                    }
                </select>
            );
            break;

        default:
            inputElement = <input 
                className={classes.ImputElement} 
                {...props.elementConfig} 
                value={props.value} />;
            break;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );    
};

export default input;