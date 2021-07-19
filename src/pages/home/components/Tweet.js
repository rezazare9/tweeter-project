import IconButton from '@material-ui/core/IconButton';
import  Typography  from '@material-ui/core/Typography';
import Grid  from '@material-ui/core/Grid';
import React from 'react';
import useStyle from '../styles';
import FavoriteIcon from '@material-ui/icons/Favorite';


const Tweet = ({data}) => {

    const renderTweet =(text)=>{
       return {__html: text.replace(/#\S+/g,"<a href='/tags/$&' style='color:cornflowerblue; text-decoration: none;'>$&</a>")} 
    }



    const classes = useStyle();
    return (
        <div className={classes.tweetItem}>
        <Grid container >
        <img src={data.sender.img} alt={"user"} style={{height:'max-content',borderRadius:'50%'}}/>
            <Grid itme container direction={"column"} style={{flex:1,  marginRight:'1rem'}}>
                <Grid item container>
                    <Typography className={classes.tweetItemName}>{data.sender.name}</Typography>
                    <Typography className={classes.tweetItemId}>{data.sender.id}</Typography>
                </Grid>
                <Typography dangerouslySetInnerHTML={renderTweet(data.text)} className={classes.tweetText} component={"p"}/>
                
                
            </Grid>
        </Grid>
        <Grid container direction={"row-reverse"} style={{marginTop:16 , alignItems:'center'}} >
        <IconButton className={classes.newTweetImgBtn}>
            <img src={"images/retweet.png"} alt={"tweetpic"}  className={classes.newTweetImg}/>
            </IconButton>
            <IconButton className={classes.newTweetImgBtn}>
                <FavoriteIcon/>
            </IconButton>
            <Typography className={classes.likeCount}>{data.likes}</Typography>
        </Grid>
    </div>  
    );
};

export default Tweet;