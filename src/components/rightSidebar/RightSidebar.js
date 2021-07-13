import React from 'react';
import Typography from "@material-ui/core/Typography";
import useStyles from './style';
import Grid from "@material-ui/core/Grid";
import ButtonBase from '@material-ui/core/ButtonBase';


const hashTags = [
    "پرچم_دار_جدید",
    "کرونا_ویروس",
    "سامسونگ",
    "هلو_سامر",
    "پرچم_دار_جدید",
    "کرونا_ویروس",
    "سامسونگ",
    "هلو_سامر",
]

const RightSidebar = () => {

    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Grid container direction={"row"} alignItems={'center'}>
                <Grid item>
                      <img src={"images/logo.png"} alt={"logo.png"}/>
                </Grid>
                <Grid item>
                    <Typography className={classes.logoType}>
                    توییتر فارسی
                </Typography>
                </Grid>
            </Grid>
            <Typography className={classes.hashtagTitle}>
                داغ ترین هشتگ ها
            </Typography>
            <Grid container direction={"column"} alignItems={"center"}>
                {hashTags.map(item =>
                        <ButtonBase className={classes.hashTagParent}>
                            <Grid item container>
                                <img src={"images/hashtag.png"} alt={"hashtag.png"} />
                                <Typography className={classes.hashtag}>
                                    {item}
                                </Typography>
                            </Grid>
                         </ButtonBase>
                        )
                }
            </Grid>
    </div>
    );
};

export default RightSidebar;