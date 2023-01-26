import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefaut()
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
                <button className='login__registreButton'>Create your amazon account</button>
            </div>

        </div>
    )
}

export default Login
