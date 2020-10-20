import React from 'react'
import './Checkout.css'


function CheckoutProduct({id, image, title, price, rating}) {
    
    return (
        <div key={id} className="checkout__list">
            <p>{title}</p>
            <p>{rating}</p>
            <p>{price}</p>
            <img src={image} alt=""/>
        </div>
    )
}

export default CheckoutProduct
