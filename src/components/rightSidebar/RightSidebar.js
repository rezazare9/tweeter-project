import React, { useEffect ,useState  } from 'react';
import Typography from "@material-ui/core/Typography";
import useStyles from './style';
import Grid from "@material-ui/core/Grid";
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { getHashTags } from '../../api/api_tweet';



const RightSidebar = () => {
    // const onPostClick=()=>{
    //     props.history.push("/posts")
    // }

    const [hashTags , setHashTags] = useState([]);

    useEffect(()=>{
        getHashTags((isOk,data)=>{
            if(!isOk)
            return alert("faild" + data.message);
            setHashTags(data);
        })
    },[])

    
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Link to={"/"}>
                <Grid container direction={"row"} alignItems={'center'}>
                    <Grid item>
                        <img src={"/images/logo.png"} alt={"logo.png"}/>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.logoType}>
                        توییتر فارسی
                    </Typography>
                    </Grid>
                </Grid>
            </Link>
            <Typography className={classes.hashtagTitle}>
                داغ ترین هشتگ ها
            </Typography>
            <Grid container direction={"column"} alignItems={"center"}>
                {hashTags.map(item =>
                        <ButtonBase className={classes.hashTagParent}>
                                <Link to={"/hashtags/"+item} style={{width:'100%'}}>
                            <Grid item container>

                                <img src={"/images/hashtag.png"} alt={"hashtag.png"} />
                                <Typography className={classes.hashtag}>
                                    {item} 
                                </Typography>
                            </Grid>
                                </Link>
                         </ButtonBase>
                        )
                }
            </Grid>
    </div>
    );
};

export default RightSidebar;