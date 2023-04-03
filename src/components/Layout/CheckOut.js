import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CheckOut = () => {
    return (
        <div>
           <div className='grid grid-cols-3'>
            <div className="col-span-2">
            <Outlet></Outlet>
            </div>
            <div>
            <h1>Order Summery</h1>
            <h1>Apply Discount Code</h1>
            <h1>Use Club Points</h1>
            <h1>Cart Subtotal</h1>
            <h1>Total</h1>
           </div>
         
           
           <Link to="/checkout/address" className='btn btn-outline items-center'>Proceed To Checkout</Link>
        </div>
        </div>
    );
};

export default CheckOut;