import React from 'react';
import useStyles from './style.js'
import RightSidebar from '../rightSidebar/RightSidebar.js';
import LeftSidebar from '../leftSidebar/LeftSidebar.js';
import Divider from '@material-ui/core/Divider';
import Home from '../../pages/home/Home.js';

const Layout = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <RightSidebar/>
            <Divider orientation={"vertical"} className={classes.divider}/>
                <Home/>
            <Divider orientation={"vertical"} className={classes.divider}/>
           <LeftSidebar/>
        </div>
    );
};

export default Layout;