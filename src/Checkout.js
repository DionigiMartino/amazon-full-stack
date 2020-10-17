import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider';

// import Subtotal

import Subtotal from './Subtotal'

function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    let basketArray = basket.map(el => {
        return (
            <div>
                <p>{el.title}</p>
                <p>{el.price}</p>
                <img src={el.image} />
            </div>
        )
    })

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

                <div>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {basketArray}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
