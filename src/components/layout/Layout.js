import React from 'react';
import useStyles from './style.js'

const Layout = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.rightSidebar}>
                right sidebar;
            </div>
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