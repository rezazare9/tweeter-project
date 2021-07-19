import React from 'react';
import useStyle from './styles';
import Header from '../../components/header/Header';
import Divider  from '@material-ui/core/Divider';
import NewTweet from './components/NewTweet';
import TweetList from './components/TweetList';
import HomeIcon from '@material-ui/icons/Home';


const tweets = [
    {
        sender:{
            name:"Samsung",
            id:"@Samsung",
            img:"images/samsung.png"
        },
        text:"بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای #صبحانه کسی #کرفس درست کنه",
        likes : 5
    },
    {
        sender:{
            name:"سیامک کوه دره",
            id:"@koooooh",
            img:"images/koooh_user.png"
        },
        text:"بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای #صبحانه کسی #کرفس درست کنه",
        likes : 57
    },
    {
        sender:{
            name:"Samsung",
            id:"@Samsung",
            img:"images/samsung.png"
        },
        text:"بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای #صبحانه کسی #کرفس درست کنه",
        likes : 2
    },
    {
        sender:{
            name:"سیامک کوه دره",
            id:"@koooooh",
            img:"images/koooh_user.png"
        },
        text:"بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای #صبحانه کسی #کرفس درست کنه",
        likes : 0
    },
    {
        sender:{
            name:"Samsung",
            id:"@Samsung",
            img:"images/samsung.png"
        },
        text:"بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای #صبحانه کسی #کرفس درست کنه",
        likes : 59
    },
    {
        sender:{
            name:"سیامک کوه دره",
            id:"@koooooh",
            img:"images/koooh_user.png"
        },
        text:"بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای #صبحانه کسی #کرفس درست کنه",
        likes : 8
    },
    {
        sender:{
            name:"Samsung",
            id:"@Samsung",
            img:"images/samsung.png"
        },
        text:"بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای #صبحانه کسی #کرفس درست کنه",
        likes : 29
    },
    {
        sender:{
            name:"سیامک کوه دره",
            id:"@koooooh",
            img:"images/koooh_user.png"
        },
        text:"بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای #صبحانه کسی #کرفس درست کنه",
        likes : 31
    },
]


const Home = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Header title={"خانه"} icon={<HomeIcon/>}/>
            <Divider className={classes.divider}/>
            <NewTweet/>
            <TweetList data={tweets}/>
        </div>
    );
};

export default Home;
