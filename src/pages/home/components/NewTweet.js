import { Button, IconButton } from '@material-ui/core';
import  Grid  from '@material-ui/core/Grid';
import React from 'react';
import useStyles from '../styles';

const NewTweet = () => {
    const classes = useStyles();
    return (
        <div className={classes.newTweet}>
            <Grid container>
            <img src={"images/user img.png"} alt={"user"} style={{width:'max-content',borderRadius:'50%'}}/>
            <textarea placeholder={"توییت کن .."}  className={classes.input}/>
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