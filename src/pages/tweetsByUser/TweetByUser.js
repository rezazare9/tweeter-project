import React from 'react';
import useStyle from '../home/styles.js';
import Header from '../../components/header/Header';
import Divider  from '@material-ui/core/Divider';
import TweetList from '../home/components/TweetList';
import PersonIcon from '@material-ui/icons/Person';

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


const TweetByUser = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Header title={"محمد رضا زارع"} icon={<PersonIcon/>}/>
            <Divider className={classes.divider}/>
            <TweetList data={tweets}/>
        </div>
    );
};


export default TweetByUser;