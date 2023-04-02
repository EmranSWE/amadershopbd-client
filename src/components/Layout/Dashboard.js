import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='grid lg:grid-cols-4 sm:grid-cols-1'>
            <div>
            
                    <ul className="menu p-4  bg-base-100 text-base-content">
                        <li><Link to="/dashboard/timeline">Your Timeline</Link> </li>
                        <li><Link to="/dashboard/orders">Orders</Link></li>
                        <li><a>Payment Summery</a></li>
                    </ul>

            </div>
            <div><Outlet></Outlet></div>
        </div>
    );
};

export default Dashboard;