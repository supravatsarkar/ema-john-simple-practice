import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props)
    const { name, img, stock, seller, price } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="Product" />
            </div>
            <div className="product-info">
                <h4 className="product-title">{name}</h4>
                <p><small>by {seller}</small></p>
                <h3 className="price">$ {price}</h3>
                <p><small>only {stock}left in stock - order soon</small></p>
                <button onClick={() => props.addToCartHandle(props.product)} className="addToCartBtn">add to cart</button>
            </div>

        </div>
    );
};

export default Product;