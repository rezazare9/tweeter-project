import { Button, IconButton } from '@material-ui/core';
import  Grid  from '@material-ui/core/Grid';
import React from 'react';
import useStyles from '../styles';
import classnames from 'classnames';


const NewTweet = () => {

    // const input = React.useRef();

    // const [tweet,setTweet] = React.useState();

    // const renderTweet =(text)=>{
    //     return {__html: text.replace(/#\S+/g,"<span style='color:cornflowerblue; text-decoration: none;'>$&</span>")} 
    //  }

    // React.useEffect(()=>{
    //     input.current.addEventListener("input", function(e) {
    //         // console.log("input event fired",e.target.innerText);
    //         setTweet(renderTweet(e.target.innerText))
    //         window.cursorManager.setEndOfContenteditable(e.target);
    //     }, false);
    // },[])

    const classes = useStyles();
    return (
        <div className={classes.newTweet}>
            <Grid container>
            <img src={"images/user img.png"} alt={"user"} style={{width:'max-content',borderRadius:'50%'}}/>
            <div contentEditable className={classnames(classes.input,"editable")} data-placeholder="توییت کن .." 
            // ref={input} 
            // dangerouslySetInnerHTML={tweet}
            ></div>
            </Grid>
            <Grid container direction={"row-reverse"} style={{marginTop:16}}>
                <Button variant={"contained"} color={"primary"}  className={classes.newTweetBtn}>توییت</Button>
                <IconButton className={classes.newTweetImgBtn}>
                <img src={"images/tweetpic.png"} alt={"tweetpic"}  className={classes.newTweetImg}/>

                </IconButton>
            </Grid>
        </div>  
    );
};

export default NewTweet;