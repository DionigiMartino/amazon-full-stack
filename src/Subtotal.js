import React from 'react'
import './Subtotal.css'

// import Currency format

import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();

    let value = basket.reduce((a, b, id) => {
        return a.price + b.price;
    })

    console.log(value)

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={value => (
                    <>
                        <p>
                            Subtotal: ({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={value}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal


