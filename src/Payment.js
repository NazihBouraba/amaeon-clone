import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {

    let navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [disable, setDisable] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the spcial stripe secret which allows to charge customer
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                //stripe expects a total in a currencies subunits 
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            navigate("/orders", { replace: true });

        })


    }

    const handleChange = (event) => {
        // very important 
        // Listen for changes in CardElements
        // and display any errors as the customer types their card details 
        setDisable(event.empty);
        setError(event.error ? event.error.message : "");
    }

    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className="payment__container">
                <h1> Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React , Lane </p>
                        <p>Los Angeles, CA</p>
                    </div>

                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((item) => <CheckoutProduct {...item} />)}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    value={getBasketTotal(basket)}
                                    decimalScale={2}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    renderText={(value) => (
                                        <h3>Order Total : {value}</h3>
                                    )}

                                />
                                <button disabled={disable || processing || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                                {/* if error */}
                                {error && <div>{error}</div>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
