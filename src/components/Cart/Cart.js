import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { cart } = props;
    console.log(cart);
    const totalPrice = cart.reduce((previousValue, product) => previousValue + product.price, 0);
    const shiping = totalPrice * .079;
    const totalBeforeTax = totalPrice + shiping;
    const tax = totalPrice * .10;
    const totalOrder = totalBeforeTax + tax;
    console.log(totalPrice)

    return (
        <div className="cart">
            <h2>Order Summery</h2>
            <h3>Items Order: {cart.length} </h3>
            <table>
                <tr>
                    <td>Items:</td>
                    <td>${totalPrice.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Shipping & Handling:</td>
                    <td>${shiping.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Total before tax:</td>
                    <td>${totalBeforeTax.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Estimated Tax:</td>
                    <td>${tax.toFixed(2)}</td>
                </tr>
                <tr className="order-total">

                    <td >Order Total:</td>
                    <td>${totalOrder.toFixed(2)}</td>

                </tr>
            </table>
            <button className="review-order">Review your order</button>
        </div>
    );
};

export default Cart;