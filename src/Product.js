import React from 'react'
import "./Product.css"

function Product() {
    return (
        <div className='product'>
            <div className='product__info' >
                <p>exemple of product</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className='product__rating'>
                    <p>✨</p>
                </div>
            </div>

            <img alt="" src="https://m.media-amazon.com/images/I/71VE3EVMJVL._AC_SY230_.png" />
            <button>add to Basket</button>
        </div>
    )
}

export default Product
