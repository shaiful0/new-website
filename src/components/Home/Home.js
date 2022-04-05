import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/usecart';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
  const [carts , setCarts] = useCart();
  return (
    <div className="">
    <div className='home-container'>
    <div className="text-container">
      <h1>Ray-Ban's sunglasses</h1>
      <p>If a company has been thriving for years, it's safe to say they probably make pretty good stuff. Ray-Ban has been making functional and cool eyewear since 1937. Today, the brand still offers some of the best sunglasses on the market. Here, we lay out why we love these sunglasses and answer frequently asked questions about the brand.</p>
    </div>
    <div className="image-container">
      <img src="https://thumbs.dreamstime.com/b/rayban-sunglasses-ray-ban-55159067.jpg" alt="" />
    </div>
    </div>
  
    <h1>Customer Reviews(7)</h1>
    <div>
     
      <Reviews
      cart={carts}>
    
      </Reviews>
      <Link to="/reviews">
        <button className='show-all'><h2>show all</h2></button>
      </Link >
    </div>
      
    </div>
  );
};

export default Home;