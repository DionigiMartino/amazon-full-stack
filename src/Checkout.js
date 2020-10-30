import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

// import Subtotal

import Subtotal from './Subtotal'

function Checkout() {
    const [{basket}] = useStateValue();

    // let ProductList = 

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

                <div>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {basket?.map((product, id) => {
                        return (
                            <CheckoutProduct 
                                image={product.image}
                                title={product.title}
                                rating={product.rating}
                                price={product.price}
                                key={id}
                                id={id}
                            />
                        )
                    })}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
