import React from 'react';

import classes from './DrawToogle.css';

const drawToogle = (props) => (
    <div 
        className={classes.DrawerToggle}
        onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawToogle;