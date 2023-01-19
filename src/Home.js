import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            < div className='home__container' >
                <img alt="" className='home__image' src="https://m.media-amazon.com/images/I/71QP7gjjoKL._SX3000_.jpg" />
            </div>

            <div className='home__row'>
                <Product />
            </div>

            <div className='home__row'></div>
            <div className='home__row'></div>
        </div>
    )
}

export default Home
