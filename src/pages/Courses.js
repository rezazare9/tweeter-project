import React from 'react';
import { Link } from 'react-router-dom';

const Courses = (props) => {

    const onPostClick = () => {
        props.history.push("/posts")
    }

    return (
        <div>
            Corses list
            <br/>
            <button onClick={onPostClick}>لیست پستها</button>
            <br/>
            <Link to={"/posts"}>لیست پستها </Link>
        </div>
    );
};

export default Courses;