import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container' >
                <img alt="" className='home__image' src="https://m.media-amazon.com/images/I/71QP7gjjoKL._SX3000_.jpg" />
                <div className='home__row'>
                    <Product title='air buds'
                        id={1234}
                        image='https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/YzdiYTg5OWEt/YzdiYTg5OWEt-YzA3ZjkyMzct-w379._SY304_CB618084578_.jpg'
                        price={29.99}
                        rating={5}
                    />
                    <Product
                        id={1235}
                        title={'Cajoline Assouplissant Ultra-Concentré Tourbillon de Fraîcheur 960ml, 64 lavages'}
                        image={'https://m.media-amazon.com/images/I/71+FS43vMkL._AC._SR360,460.jpg'}
                        price={3.69}
                        rating={2} />
                </div>
                <div className='home__row'>
                    <Product title={'Fairy Platinum Plus Tout-en-1 Pastilles Lave-Vaisselle, 100 Tablettes (5 x 20) Citron, Défie les taches les plus Coriaces'}
                        id={1236}
                        image={'https://m.media-amazon.com/images/I/71rqwd4BbxL._AC._SR360,460.jpg'}
                        price={10}
                        rating={4}
                    />
                    <Product title={'Carte Noire, Classique N°5, Café en Dosettes Compostables, 180 Capsules Compatibles avec les Machines à Café Senseo, Notes Profonds et Suaves, 100% Arabica, Intensité 5, 3 Paquets de 60 Dosettes'}
                        id={1237}
                        image={'https://m.media-amazon.com/images/I/7129zjf1toS._AC._SR360,460.jpg'}
                        price={20.54}
                        rating={5} />
                    <Product
                        id={1238}
                        title={'NATURELA - Café Grains Bio - Café Arabica Bio - Torréfaction Lente - Fabriqué en France - 1 kg'}
                        image={'https://m.media-amazon.com/images/I/71qrRB9jC1L._AC._SR360,460.jpg'}
                        price={11.68}
                        rating={2} />
                </div>

                <div className='home__row'>
                    <Product
                        id={1239}
                        title={'Bulk Shaker Iconic, Protéine Shaker, Noir Metallisé, 750 ml'}
                        image={'https://m.media-amazon.com/images/I/61hZ-DjbV4L._AC._SR360,460.jpg'}
                        price={5.99}
                        rating={3} />
                </div>
            </div>
        </div>
    )
}

export default Home
