import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const usr = useLoaderData();
    console.log(usr)
    return (
        <div>
            <h1>Users details</h1>
            <p>{usr.name}</p>
            <p>{usr.id}</p>
            <p>{usr.phone}</p>
        </div>
    );
};

export default UserDetails;