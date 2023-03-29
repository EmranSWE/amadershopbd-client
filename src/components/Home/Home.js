import React from 'react';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import BestSell from './Best Selling Products/BestSell';
import Electronics from './Electronics & Appliances/Electronics';
import Feature from './Feature';
import Gadgets from './Gadgets/Gadgets';
import Header from './Header';
import Laptops from './Laptop & Tab/Laptops';
import Lifestyle from './Lifestyle/Lifestyle';
import MobileStore from './Mobile Store/MobileStore';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Feature></Feature>
            <BestSell></BestSell>
            <MobileStore></MobileStore>
            <Electronics></Electronics>
            <Gadgets></Gadgets>
            <Laptops></Laptops>
            <Lifestyle></Lifestyle>
            <Footer></Footer>
        </div>
    );
};

export default Home;