import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total += course.price;
    }
    const tax = (total / 10).toFixed(2);
    const gTotal = (total + Number(tax)).toFixed(2);
    return (
        <div className="orders list-group">
            <h3>Order Summary</h3>
            <p className="list-group-item list-group-item-action active">Items Order : {cart.length} </p>
            <p>Price: {total} </p>
            <p className="list-group-item list-group-item-action">Tax + VAT: {tax}  </p>
            <h6>Grand Total: {gTotal}  </h6>

        </div>
    );
};

export default Cart;