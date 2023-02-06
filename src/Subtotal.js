import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {

    let navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                value={getBasketTotal(basket)}
                decimalScale={2}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                renderText={(value) => (
                    <>
                        <p>Subtotal ({basket?.length} items)  :
                            <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type={"checkbox"}></input>
                            this order contains a gift
                        </small>
                    </>

                )}

            />

            <button onClick={e => navigate("/payment")}>proceed to checkout</button>


        </div>
    )
}

export default Subtotal