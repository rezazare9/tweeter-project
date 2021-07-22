import React  , { useEffect ,useState  } from 'react';
import useStyle from '../home/styles.js';
import Header from '../../components/header/Header';
import Divider  from '@material-ui/core/Divider';
import TweetList from '../home/components/TweetList';
import PersonIcon from '@material-ui/icons/Person';
// import axios from 'axios';
import {getAllTweets}  from '../../api/api_tweet.js';



const TweetByUser = (props) => {

    const [tweets , setTweets] = useState([]);
    useEffect(()=>{
       getAllTweets((isOk,data)=>{
           if(!isOk)
           return alert(data.message);
           else setTweets(data);

       });
    },[]);


    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Header title={props.match.params.user} icon={<PersonIcon/>}/>
            <Divider className={classes.divider}/>
            <TweetList data={tweets}/>
        </div>
    );
};


export default TweetByUser;