import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating}) {
    // Taking the Data Layer

    const [{basket}, dispatch] = useStateValue();

    console.log('This is the basket', basket)

    const addToBasket = () => {
        // Dispatch the item inside the Data Layer
        dispatch({
            // Type action i'm interested in
            type: 'ADD_TO_BASKET',
            // The item pushed inside the data layer
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div key={id} className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>*</p>
                    ))}
                </div>
            </div>

            <img src={image} alt=""/>

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
