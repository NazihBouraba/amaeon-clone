import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

function Login() {

    let navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/");
                // ...
            })
            .catch((error) => {
                alert(error => error.message)
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const register = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                // if successfully creates a user with email and password
                if (auth)
                    navigate("/");
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to="/">
                <img alt="" className='login__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG6.png'></img>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type={'email'}></input>
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type={'password'}></input>
                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>
                <p>By signing-in you agree to Amazon's clone
                    Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice
                    and-our I Interest Besed-Ads notice
                </p>
                <button onClick={register} className='login__registreButton'>Create your amazon account</button>
            </div>

        </div>
    )
}

export default Login
