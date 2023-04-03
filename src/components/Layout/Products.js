import React from 'react';
import { Outlet } from 'react-router-dom';

const Products = () => {
    return (
        <div className='grid lg:grid-cols-5 sm:grid-cols-1'>
           <div className='bg-base-200'>
                    <h1>Filter</h1>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">What is your name?</span> </label>

                        <input type="text" placeholder="Type here" className="input input-bordered input-xs w-full max-w-xs" />

                    </div>
                    <h1>Brand</h1>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">What is your name?</span> </label>

                        <input type="text" placeholder="Type here" className="input input-bordered input-xs w-full max-w-xs" />

                    </div>
                    <h1>Processor</h1>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Pick the best fantasy franchise</span>
                        </label>
                        <select className="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
                        </select>
                    </div>
                </div>
            <div className='lg:col-span-4 sm:col-span-2'><Outlet></Outlet></div>
        </div>
    );
};

export default Products;