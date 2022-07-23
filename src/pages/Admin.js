import React from 'react';
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom"

const Admin = () => {
    const {user} = useSelector(state => state)
    if (user.id !== 0) {
        return (
            <Navigate to="/" />
        )
    }
    return (
        <div>
            ADMIN
        </div>
    );
};

export default Admin;