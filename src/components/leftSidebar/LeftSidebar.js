import Typography from '@material-ui/core/Typography';
import React from 'react';
import useStyles from './style';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider';
import ButtonBase from '@material-ui/core/ButtonBase';


const Tweeter = ({name,id,img}) =>{
    const classes = useStyles();
    return <ButtonBase><Grid container direction={"row"} className={classes.tweeterParent}>
        <img src={img} alt={"user"} style={{width:50}}/>
        <Grid item container direction={"column"} className={classes.tweeterNameParent}>
            <Typography className={classes.profName}>{name}</Typography>
            <Typography className={classes.profId}>{id}</Typography>
        </Grid>
    </Grid></ButtonBase>
}
const tweeter =[
    {
        name:"Xiaomi",
        id:"@Xiaomi",
        img:"images/xiaomi.png"
    },
    {
        name:"Samsung",
        id:"@Samsung",
        img:"images/samsung.png"
    },
    {
        name:"بیل گیتس",
        id:"@BillGates",
        img:"images/bil.png"
    },
    {
        name:"مایک بای",
        id:"@Mike_IMC",
        img:"images/mike.png"
    },
    {
        name:"شرلی ونگ!",
        id:"@Shirley_IMC",
        img:"images/shily.png"
    },
]

const LeftSidebar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <Grid container direction={"row-reverse"}>
               <img src={"images/user img.png"} alt={"user"} style={{width:'max-content',borderRadius:'50%'}}/>
               <Grid item container direction={"column"} className={classes.profText}>
                    <Typography className={classes.profName}>محمد رضا زارع</Typography>
                    <Typography className={classes.profId}>Mohammad Reza Zare</Typography>
               </Grid>
           </Grid>
           <Grid item container direction={"column"} className={classes.tweeterRoot}>
                <Typography className={classes.tweeterTitle}>
                    بهترین خبرنگاران
                </Typography>
                <Divider style={{marginLeft:'-24px',marginRight:'-24px'}}/>
                {
                    tweeter.map((item,index) => {
                    return (<><Tweeter name={item.name} id={item.id} img={item.img}/>
                        {index !== tweeter.length -1 &&
                            <Divider style={{marginLeft:'-24px',marginRight:'-24px'}}/>
                        }
                        </> )
                })
                }
                
           </Grid>
        </div>
    );
};

export default LeftSidebar;