import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Cart = () => {
    const {pathname}=useLocation();
    const checkout=pathname.includes("cart")
    const products = useSelector(state=> state.cart);
    const cartProduct= products.map(product => product);
    const {image,name,Price,quantity}= cartProduct[0]
    return (
        <div>    
             <div className='grid grid-cols-4 items-center'>
                <div><img src={image} className='w-48' alt="" /></div>
                <div>
                    <h1>{name}</h1>
                </div>
                <div>${Price}</div>
                <div>{quantity}</div>
            </div>
           {checkout ? <Link to="/checkout/address" className='btn btn-outline items-center'>Proceed To Checkout</Link> : <h1>Order now</h1> }
        </div>
    );
};

export default Cart;