import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const [cart, setCarts] = useState([]);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCarts(newCart);
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
              

                {

                    products.map(product => <Product key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)   

                    
                }
                
             </div>
            <div className="cart-container">
             <Cart cart={cart}></Cart>
                
            </div>

        </div>
    );
};

export default Shop;