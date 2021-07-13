import React from 'react';
import useStyles from './style.js'
// import Typography from "@material-ui/core/Typography";
import RightSidebar from '../rightSidebar/RightSidebar.js';
import Divider from '@material-ui/core/Divider';

const Layout = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <RightSidebar/>
           <Divider orientation={"vertical"} className={classes.divider}/>
            <div className={classes.mainPart}>
                Main part
            </div>
            <div className={classes.leftSidebar}>
                left sidebar
            </div>
        </div>
    );
};

export default Layout;