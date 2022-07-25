import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const Profile = () => {
    const {user} = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div>
            ME ({user.id})<br/>
            {user.id === 0 && <Link to='/admin'>admin</Link>} <br />
            <Button variant="dark" onClick={() => dispatch({type: "LOGOUT"})}>Выйти</Button>
        </div>
    );
};

export default Profile;