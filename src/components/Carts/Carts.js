import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faStar, } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const Carts = (props) => {
  const {img, name,text,} = props.cart;
  return (
    <div className='main-contain'>
    <div  className='cart-container'>
      <img src={img} alt="" />
      <h1>{name}</h1>
      <span>{text}</span>
      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faStarHalfStroke}></FontAwesomeIcon>
    </div>
    </div>
  );
};

export default Carts;