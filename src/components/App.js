import React from 'react';
import Layout from './layout/Layout';
import Home from '../pages/home/Home.js';
import { BrowserRouter , Route , Switch } from 'react-router-dom'
import Page404 from '../pages/404/404.js';
import TweetByHashTag from '../pages/tweetsByHashtag/TweetByHashTag.js';
import TweetByUser from '../pages/tweetsByUser/TweetByUser.js';
import AuthPage from '../pages/auth/AuthPage';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={AuthPage}/>
                <Route path={"/"} render={()=>{
                    return <Layout>
                            <Switch>
                                <Route exact path={"/"} component={Home}/>
                                <Route exact path={"/hashtags/:hashtag"} component={TweetByHashTag}/>
                                <Route exact path={"/users/:user"} component={TweetByUser}/>
                                <Route component={Page404}/>
                            </Switch>
                        </Layout>
                }}/>
            </Switch>
        </BrowserRouter>
        <ToastContainer/>
        </>
    );
};

export default App;