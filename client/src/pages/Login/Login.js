/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import twitterImage from '../../assets/images/twitter.jpeg'
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import auth from '../../firebase.init'
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import logo from '../../assets/buzzvibe-logo.png'
import login_page_image from '../../assets/images/login-page-image.jpeg'
import Divider from '@mui/material/Divider';


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
    <div className='h-screen w-screen bg-[#0f0e0e] flex flex-col'>
        {/* HEADER */}
        <div className='h-[15vh] w-screen flex justify-between items-center mb-5'>
            <div className='ml-[9vw]'>
                <img src={logo} alt="buzzvibe-logo" className='w-[10vw]'/>
            </div>
            <div className='flex gap-4 mr-[10vw]'>
                <a href='https://github.com/aryanploxxx' target="_blank" rel="noreferrer"><FaGithub className='text-[#D9D9D9] text-[2vw]'/></a>
                <a href='https://www.linkedin.com/in/aryanploxxx/' target="_blank" rel="noreferrer"><FaLinkedin className='text-[#D9D9D9] text-[2vw]'/></a>
            </div>
        </div>

        {/* BODY */}
        <div className='h-[85vh] w-screen flex justify-around items-start mt-5'>
            {/* LEF PART */}
            <div className='ml-[5vw] w-[45%] flex flex-col gap-5'>
                <div className='text-[#D9D9D9] max-h-48 rounded-[30px] text-right overflow-hidden relative '>
                    {/* <img src={logo} alt="" className='ml-[-90px] absolute'/> */}
                    <svg className='mt-[-500px] ml-[-1600px] absolute z-0' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#E6B92D" d="M49.6,-58.7C60.8,-49.7,64,-30.8,65.2,-13.1C66.5,4.6,65.8,21.1,60.3,38.7C54.7,56.3,44.4,74.9,30,78.5C15.6,82,-2.9,70.5,-21,62C-39,53.5,-56.6,48.2,-68.2,35.7C-79.9,23.2,-85.6,3.5,-83.5,-15.8C-81.4,-35.2,-71.4,-54.2,-56.2,-62.5C-41,-70.8,-20.5,-68.3,-0.6,-67.6C19.2,-66.8,38.4,-67.7,49.6,-58.7Z" transform="translate(100 100)" />
                    </svg>
                    <h1 className='leading-tight p-2 font-medium z-10' style={{fontFamily: "Gilroy"}}>going viral, <br/> one post at a time.</h1>
                </div>
                <div className=' w-full overflow-hidden bg-[#1b1b1b] rounded-[40px]'>
                    <div className='h-1/3 overflow-hidden max-h-[24rem] min-w-64'>
                        <img src={login_page_image} alt="" className=''/>
                    </div>
                </div>
            </div>
            {/* RIGHT SIDE */}
            <div className='mr-[5vw] w-[32%]'>
                <div className='flex flex-col p-[50px] item-center bg-[#1b1b1b] rounded-[30px]'>
                    <div className="justify-start items-inherit row-auto ">
                        <h2 className='text-[#D9D9D9] text-[24px]' style={{fontFamily: "Gilroy"}}>what's cooking inside?</h2>
                        <form onSubmit={handleSubmit} className='flex flex-col justify-between gap-5'>
                            <input required type="email" className="w-full p-3 rounded-[5px] bg-[#D9D9D9] placeholder:text-gray-500" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)}/>
                            <input required type="password" className="w-full mt-0 p-3 rounded-[5px] bg-[#D9D9D9] placeholder:text-gray-500" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                            <button type='submit' className="w-full p-3 mb-[15px] rounded-[5px] bg-[#e6b92d]">Login</button>
                        </form>
                    </div>
                    {/* <hr /> */}
                    {/* <Divider className='flex items-center w-2/3 text-[24px] text-[#D9D9D9]' sx={{ "&::before, &::after": { borderColor: "secondary.light", }, }}>or</Divider> */}
                    <div class="w-full relative flex py-3 items-center">
                        <div class="flex-grow border-t border-gray-400"></div>
                        <span class="flex-shrink mx-4 text-gray-400 text-[20px]">or</span>
                        <div class="flex-grow border-t border-gray-400"></div>
                    </div>

                    <div className='w-full mt-3'>
                        {/* <GoogleButton classroom='g-btn' type="light" onClick={handleGoogleSignIn}/> */}
                        <div class="px-6 sm:px-0 max-w-sm ">
                            <button onClick={handleGoogleSignIn} type="button" class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center justify-between mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
                        </div>
                    </div>
                    <div className='flex mt-5 '>
                        <span className='text-[#D9D9D9]' style={{fontFamily: "Gilroy"}}>new warrior?</span>
                        <Link to='/signup' className='' style={{ textDecoration:'none', color: 'skyblue', fontWeight: '600', marginLeft: '5px' }} > Create Account </Link>
                    </div>
                </div> 
            </div>
        </div>

        
    </div>
  )
}

export default Login