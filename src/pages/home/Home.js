import React from 'react';
import useStyle from './styles';
import Header from './components/Header';
import Divider  from '@material-ui/core/Divider';
import NewTweet from './components/NewTweet';

const Home = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Header/>
            <Divider className={classes.divider}/>
            <NewTweet/>
        </div>
    );
};

export default Home;
