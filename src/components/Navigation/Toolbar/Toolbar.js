import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import DrawToogle from '../SideDrawer/DrawToogle/DrawToogle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawToogle clicked={props.drawToogleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesctopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;