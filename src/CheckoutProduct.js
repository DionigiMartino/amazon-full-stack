import React from 'react'
import './Checkout.css'


function CheckoutProduct({id, image, title, price, rating}) {
    return (
        <div key={id} className="checkout__list">
            <img src={image} alt=""/>
            <div className="checkout__list_information">
                <p>{title}</p> 
                <p>€ {price}</p>
                <div className="checkout__list_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>*</p>
                    ))}
                </div>

                <button>Remove from the basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
