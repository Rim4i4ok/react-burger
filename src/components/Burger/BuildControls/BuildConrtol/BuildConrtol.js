import React from 'react';

import classes from './BuildConrtol.css'

const buildConrtol = (props) => (
    <div className={classes.BuildConrtol}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>    
);

export default buildConrtol;