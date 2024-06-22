/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import twitterImage from '../../assets/images/twitter.jpeg'
import { FaTwitter } from "react-icons/fa";
import auth from '../../firebase.init'
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [errorMessage, setError] = useState('')
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);  
    
    const navigate = useNavigate();
    
    if(user || googleUser) {
        navigate('/')
        // console.log(user)
        // console.log(googleUser)
    }

    if(error) {
        console.log(error.message)
    }

    if(loading) {
        // console.log('loading ...')
    }  


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email, password)
        signInWithEmailAndPassword(email, password)
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

  return (
    <div className='login-container'>
        <div className='image-container'>
            <img src={twitterImage} alt=""/>
        </div>
        <div className='form-container'>
            <div className="form-box">
                <FaTwitter className='Twittericon' style={{ color: 'skyblue' }}/>
                <h2 className='heading'>Happening Now</h2>
                <h2 className='heading1'>What's Happening Today</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" className="email" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" className="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                    <div className='btn-login'>
                        <button type='submit' className='btn'>Login</button>
                    </div>
                </form>
            </div>
            <hr />
                <div className='google-button'>
                    <GoogleButton classroom='g-btn' type="light" onClick={handleGoogleSignIn}/>
                </div>
                <div>
                    Don't have an account?
                    <Link to='/signup' style={{ textDecoration:'none', color: 'skyblue', fontWeight: '600', marginLeft: '5px' }} > Sign Up </Link>
                </div>
        </div>
    </div>
  )
}

export default Login