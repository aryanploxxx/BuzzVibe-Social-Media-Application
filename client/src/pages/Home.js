/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Feed from './Feed/Feed'
import Widgets from './Widgets/Widgets'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
import { useSignOut } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom'
import useLoggedInUser from '../Hooks/useLoggedInUser'
import '../fonts.css'
import Navbar from './Navbar/Navbar'

const Home = () => {
  const user = useAuthState(auth);
  // We get the entire logged in user details including email from this
  // Now we will extract email and use to it fetch all remaining details of the user from it
  // console.log(user?.email);

  const [loggedInUser] = useLoggedInUser();
  // console.log(loggedInUser)

  const [signOut, loading, error] = useSignOut(auth);

  const handleLogout = () => {
    signOut(auth)
  }

  return (
    <div className='h-screen w-screen bg-[#0f0e0e] flex flex-col items-center'>
      <Navbar handleLogout={handleLogout} user={user}/>

      {/* <Sidebar handleLogout={handleLogout} user={user}/> */}
      {/* <Outlet/> */}
      {/* <Widgets/> */}
    </div>
  )
}

export default Home