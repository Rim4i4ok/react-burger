import React from 'react';

import classes from './Order.css';

const order = (props) => (
    <div className={classes.Order}>
        <p>Ingredients: Sala (1)</p>
        <p>Price: <string>USD 5.45</string></p>
    </div>
);

export default order;