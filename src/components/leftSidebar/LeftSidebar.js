import Typography from '@material-ui/core/Typography';
import React  , { useEffect ,useState  } from 'react';
import useStyles from './style';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { getUsers } from '../../api/api_tweet';

const Tweeter = ({name,id,img}) =>{
    const classes = useStyles();
    return <ButtonBase style={{width:'100%'}}><Grid container direction={"row"} className={classes.tweeterParent}>
        <img src={img} alt={"user"} style={{width:50}}/>
        <Grid item container direction={"column"} className={classes.tweeterNameParent}>
            <Typography className={classes.profName}>{name}</Typography>
            <Typography className={classes.profId}>{id}</Typography>
        </Grid>
    </Grid></ButtonBase>
}


const LeftSidebar = () => {

    const [users , setUsers] = useState([]);
    useEffect(()=>{
        getUsers((isOk,data)=>{
            if(!isOk)
            return alert("faild" + data.message);
            setUsers(data);
        })
    },[])

    const classes = useStyles();
    return (
        <div className={classes.root}>
           <Grid container direction={"row-reverse"}>
               <img src={"/images/user img.png"} alt={"user"} style={{width:'max-content',borderRadius:'50%'}}/>
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
                    users.map((item,index) => {
                    return (<Link to={`/users/${item.name}`}>
                        <Tweeter name={item.name} id={item.id} img={item.img}/>
                        {index !== users.length -1 &&
                            <Divider style={{marginLeft:'-24px',marginRight:'-24px'}}/>
                        }
                        </Link> )
                })
                }
                
           </Grid>
        </div>
    );
};

export default LeftSidebar;