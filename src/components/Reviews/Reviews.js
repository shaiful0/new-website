import React, { useEffect, useState } from 'react';
import useCart from '../../Hooks/usecart';
import Carts from '../Carts/Carts';
import './Reviews.css'

const Reviews = () => {
  const [carts , setCarts] = useCart();
  
  // const [persons, setPersons] = useState([]);

  // useEffect( () =>{
  //   fetch('parson.json')
  //   .then(res => res.json())
  //   .then(data => setPersons(data))
  // },[]);

  return (
    <div className='review-container'>
      {
        carts.map(cart => <Carts
        key={cart.id}
        cart = {cart}
        ></Carts>)
      }
    </div>
  );
};

export default Reviews;