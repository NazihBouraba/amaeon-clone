import React, { forwardRef } from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
import FlipMove from 'react-flip-move';

function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();

    const FlipArticle = forwardRef((props, ref) => (
        <div ref={ref}>
            <CheckoutProduct key={props.item.id}  {...props.item} />
        </div>
    ));

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='chekout__ad' src="https://m.media-amazon.com/images/G/08/GILFR/fr-gil_maple_vc_dt_12-2021_770x80._CB650895513_.jpg"
                    alt=" " />

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className='checkout__title'>Your shopping Basket</h2>
                    <FlipMove>
                        {basket?.map(e =>
                            <FlipArticle item={e} />
                        )
                        }
                    </FlipMove>
                </div>

            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
