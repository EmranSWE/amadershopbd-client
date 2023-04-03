import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Account = () => {
    return (
        <div>
            <div className="grid grid-cols-3">
            <div>
            
            <ul className="menu p-4  bg-base-100 text-base-content">
                <li><Link to="/account/profile">My Profile</Link> </li>
                <li><Link to="/account/myorder">My Orders</Link></li>
                <li><Link to="/account/review">My Review</Link></li>
                <li><Link to="/account/address">My Address</Link></li>
            </ul>

    </div>
             
        <div> <Outlet></Outlet> </div>
            </div>
        </div>
    );
};

export default Account;