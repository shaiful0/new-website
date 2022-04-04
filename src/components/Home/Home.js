import React from 'react';
import './Home.css'

const Home = () => {
  
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
    <h1>Customer Reviews(6)</h1>

    <button><h2>Show all review</h2></button>
    </div>
  );
};

export default Home;