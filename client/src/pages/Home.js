/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Feed from './Feed/Feed'
import Widgets from './Widgets/Widgets'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
import { useSignOut } from 'react-firebase-hooks/auth';

const Home = () => {
  const user = useAuthState(auth);
  const [signOut, loading, error] = useSignOut(auth);

  const handleLogout = () => {
    signOut(auth)
  }

  return (
    <div className='app'>
      <Sidebar handleLogout={handleLogout} user={user}/>
      <Feed/>
      <Widgets/>
    </div>
  )
}

export default Home