import { Button, IconButton } from '@material-ui/core';
import  Grid  from '@material-ui/core/Grid';
import React from 'react';
import useStyles from '../styles';
import classnames from 'classnames';
// import axios from 'axios';
import { newTweetRequest } from '../../../api/api_tweet';


const NewTweet = () => {
    // const [tweet,setTweet] = React.useState();
    
    // React.useEffect(()=>{
        // input.current.addEventListener("input", function(e) {
            //     console.log("input event fired",e.target.innerText);
            // }, false);
            // },[])
    const input = React.useRef();
    const newTweetClick=()=>{
        const tweetText = input.current.innerText;
        if(!tweetText)
        return;
        const data = {
            id:Math.floor(Math.random()*100),
            "sender":{
                "name":"Samsung",
                "id":"@Samsung",
                "img":"/images/samsung.png"
            },
            "text":tweetText,
            "likes" : 5
        }

       newTweetRequest(data,(isOk)=>{
            if(!isOk)
            return alert("not send !")
            alert("message send")
       })
    }
    const classes = useStyles();
    return (
        <div className={classes.newTweet}>
            <Grid container>
            <img src={"/images/user img.png"} alt={"user"} style={{width:'max-content',borderRadius:'50%'}}/>
            <div contentEditable className={classnames(classes.input,"editable")} data-placeholder="توییت کن .." 
            ref={input} 
            // dangerouslySetInnerHTML={tweet}
            />
            </Grid>
            <Grid container direction={"row-reverse"} style={{marginTop:16}}>
                <Button variant={"contained"} color={"primary"}  className={classes.newTweetBtn} onClick={newTweetClick}>توییت</Button>
                <IconButton className={classes.newTweetImgBtn}>
                <img src={"/images/tweetpic.png"} alt={"tweetpic"}  className={classes.newTweetImg}/>

                </IconButton>
            </Grid>
        </div>  
    );
};

export default NewTweet;