import React from 'react';
import useStyles from './style.js'
import RightSidebar from '../rightSidebar/RightSidebar.js';
import LeftSidebar from '../leftSidebar/LeftSidebar.js';
import Divider from '@material-ui/core/Divider';
import Home from '../../pages/home/Home.js';
import Courses from '../../pages/Courses.js'
// import TweetByHashTag from '../../pages/tweetsByHashtag/TweetByHashTag.js';
// import TweetByUser from '../../pages/tweetsByUser/TweetByUser.js';
import { BrowserRouter , Route } from 'react-router-dom'
import Posts from '../../pages/Posts.js';



const Layout = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <RightSidebar/>
            <Divider orientation={"vertical"} className={classes.divider}/>
               <div className={classes.content}>
                 <BrowserRouter>
                 <Route path={"/courses"} component={Courses}/>
                 <Route path={"/posts"} component={Posts}/>
                 <Route exact path={"/"} component={Home}/>
                 </BrowserRouter>
                </div> 
            <Divider orientation={"vertical"} className={classes.divider}/>
           <LeftSidebar/>
        </div>
    );
};

export default Layout;