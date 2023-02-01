import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { getAuth, signOut } from "firebase/auth";

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentification = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            alert(error.message);
        });
    }
    return (
        <div className='header'>
            <Link to="/">
                <img alt="" className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'></img>

            </Link>
            <div className='header__search'>
                <input type="text" className='header__serchInput' />
                <SearchIcon className='header__searchIcon' />

            </div>
            <div className='header__nav'>
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentification} className='header__option'>
                        <span className='header__optionLineOne'>hello {user?.email ? user?.email : "Guest"}</span>
                        <span className='header__optionLineTwo'>{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Your </span>
                    <span className='header__optionLineTwo'>prime</span>
                </div>

                <Link to="/checkout">
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
