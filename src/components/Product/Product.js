import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, price, name, ratings, seller } = props.product;
    // console.log(props)

   
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h5>{name}</h5>
                <p>Price:${price}</p>
                <small>Manufacturer: {seller}</small>
                <br />
                <small>Rating: {ratings} Star</small>
                
           </div>
            <br />
            <button onClick={() =>props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'> Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;