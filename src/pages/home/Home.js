import React, { useEffect ,useState  } from 'react';
import useStyle from './styles';
import Header from '../../components/header/Header';
import Divider  from '@material-ui/core/Divider';
import NewTweet from './components/NewTweet';
import TweetList from './components/TweetList';
import HomeIcon from '@material-ui/icons/Home';
// import axios from 'axios';
import { getAllTweets } from '../../api/api_tweet';
import Test from './components/Test';
import Search from './components/Search';


const Home = () => {
    const classes = useStyle();

   const [tweets , setTweets] = useState([]);

   useEffect(()=>{
    getAllTweets((isOk,data)=>{
        if(!isOk)
        return alert("Faild !!!" + data.message);
       setTweets(data);
    })
},[])



    return (
        <div className={classes.root}>
            <Search/>
            <Header title={"خانه"} icon={<HomeIcon/>}/>
            <Divider className={classes.divider}/>
            <NewTweet/>
            <TweetList data={tweets}/>
            <Test/>
        </div>
    );
};

export default Home;
