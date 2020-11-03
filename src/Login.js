import React, {useState} from 'react'
import './Login.css'

import {Link} from 'react-router-dom'
import {auth} from './firebase'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        // Adding Firebase Auth
    }

    const register = e => {
        e.preventDefault();

        // Adding Firebase for Register
        
        auth
            .createUserWithEmailAndPassword(email, password)
            // it created a new user with email and pass
            .then((auth) => {
                console.log(auth)
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo" 
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo Amazon" 
                />
            </Link>   

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        type="text"       
                    />

                    <h5>Password</h5>
                    <input 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                        type="password" 
                    />

                    <button 
                        type="submit"
                        onClick={signIn} 
                        className="login__signInButton">
                        Sign In
                    </button>
                    
                    <p>By Signing-in you agree to the Amazon Fake Conditions of Use</p>
                    
                    <button 
                        onClick={register}
                        type="submit"
                        className="login__registerButton"
                        >
                        Create your amazon account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
