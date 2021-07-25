import { Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { toast } from 'react-toastify';
import React, { useState } from 'react';
import useStyles from './styles';
import { loginApi } from '../../api/api_auth';


const LOGIN_TAB_VALUE = 1
const REG_TAB_VALUE = 2


const AuthPage = () => {
    const classes = useStyles();
    const [tab,setTab] = useState(LOGIN_TAB_VALUE);

    //login state
    const [usernameLogin , setUsernameLogin] =  useState();
    const [passwordLogin , setPasswordLogin] =  useState();

    const handleChangeTab = (e,newValue)=>{
        setTab(newValue)
    }
    const validateLogin=(user)=>{
        if(!user.username)
        return "Please Enter User Name"
        if(!user.password)
        return "Please Enter Password"
    }
    const handleLogin=()=>{
        const user ={
            username : usernameLogin,
            password : passwordLogin
        }
        const error = validateLogin(user);
        if(error)
        return toast.warn(error);
        loginApi(user,(isOk,data)=>{
            if(!isOK)
            return toast.error(data);
            toast.success("enter Successfuly");
            localStorage.setItem("name",data.name);
            localStorage.setItem("image",data.image);
            localStorage.setItem("username",data.username);
            localStorage.setItem("x-auth-token",data["x-auth-token"]);
        })
    }

    return (
        <Paper className={classes.container}>
            <Typography className={classes.headerTitle}>welcome to tweeter</Typography>
            <Tabs
                value={tab}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChangeTab}
                aria-label="disabled tabs example"
            >
                <Tab label="Login" value={LOGIN_TAB_VALUE} className={classes.tab}/>
                <Tab label="Register" value={REG_TAB_VALUE} className={classes.tab} />
                
            </Tabs>
            {tab === LOGIN_TAB_VALUE &&
                <div className={classes.containerInput}> 
                    <Typography>User Name</Typography>
                    <input className={"uni_mbsmall"}
                        value={usernameLogin} onChange={e=>setUsernameLogin(e.target.value)}
                    ></input>
                    <Typography>Password</Typography>
                    <input className={"uni_mbsmall"}
                        value={passwordLogin} onChange={e=>setPasswordLogin(e.target.value)}
                    ></input>
                    <br/>
                    <button variant={"contained"} color={"primary"} onClick={handleLogin}>Enter</button>
                </div>
            }
            {tab === REG_TAB_VALUE &&
                <div className={classes.containerInput}>
                     <Typography>Full Name</Typography>
                    <input className={"uni_mbsmall"}></input>
                     <Typography>User Name</Typography>
                    <input className={"uni_mbsmall"}></input>
                    <Typography>Password</Typography>
                    <input className={"uni_mbsmall"}></input>
                    <Typography>Repeid Password</Typography>
                    <input className={"uni_mbsmall"}></input>
                    <br/>
                    <button variant={"contained"} color={"primary"}>Submit</button>
                </div>
            }
        </Paper>
    );
};

export default AuthPage;