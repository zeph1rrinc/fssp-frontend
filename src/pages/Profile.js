import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Profile = () => {
    const {user} = useSelector(state => state)

    return (
        <div>
            ME ({user.id})<br/>
            {user.id === 0 && <Link to='/admin'>admin</Link>}
        </div>
    );
};

export default Profile;