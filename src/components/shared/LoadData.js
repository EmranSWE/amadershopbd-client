import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const LoadData = () => {
 const users = useLoaderData();
    return (
        <div>
            <h1>Load Data: {users.length}</h1>
            {
                users.map (user => 
                <div> 
                <ul>{user.name}</ul>
                <ul>{user.id}</ul>
                <Link to={`/loadData/${user.id}`}><button className='btn'>Details</button></Link> 
                </div> )
            }
        </div>
    );
};

export default LoadData;