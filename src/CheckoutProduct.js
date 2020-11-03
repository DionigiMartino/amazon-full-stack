import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'


function CheckoutProduct({id, image, title, price, rating}) {
    // eslint-disable-next-line
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET', 
            // the type of dispatch from the id
            id: id
        })
    }

    return (
        <div className="checkout__list">
            <img src={image} alt=""/>
            <div className="checkout__list_information">
                <p>{title}</p> 
                <p>€ {price}</p>
                <div className="checkout__list_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>*</p>
                    ))}
                </div>

                <button onClick={removeFromBasket}>Remove from the basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
