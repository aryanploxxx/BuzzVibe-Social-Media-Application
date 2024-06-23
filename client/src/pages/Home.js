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
import logo from '../assets/buzzvibe-logo.png'

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

  const style = {
    backgroundImage: `url("../assets/buzzvibe-logo.png")`,
  };

  return (
    <div className='h-screen w-screen bg-[#0f0e0e] flex flex-col items-center'>
        <Navbar handleLogout={handleLogout} user={user}/>

        <div className=' flex flex-row justify-between min-w-[80vw] h-[80vh]'>
            <div className='flex flex-col gap-5 w-[30%]'>
                <div class="relative flex flex-col items-center rounded-[20px]  p-4 bg-[#1b1b1b] text-[#d9d9d9] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
                        <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
                            <img alt="" src={loggedInUser[0]?.coverImage} className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"/> 
                            <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                                <img className="h-full w-full rounded-full" src={loggedInUser[0]?.profileImage} alt="" />
                            </div>
                        </div> 
                        <div className="mt-16 flex flex-col items-center">
                            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                            Adela Parkson
                            </h4>
                            <p className="text-base font-normal text-gray-600">Product Manager</p>
                        </div> 
                        <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
                            <div className="flex flex-col items-center justify-center">
                            <p className="text-2xl font-bold text-navy-700 dark:text-white">17</p>
                            <p className="text-sm font-normal text-gray-600">Posts</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                            <p className="text-2xl font-bold text-navy-700 dark:text-white">
                                9.7K
                            </p>
                            <p className="text-sm font-normal text-gray-600">Followers</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                            <p className="text-2xl font-bold text-navy-700 dark:text-white">
                                434
                            </p>
                            <p className="text-sm font-normal text-gray-600">Following</p>
                            </div>
                        </div>
                </div> 
                <div className='rounded-[20px] w-[30%] p-4 bg-[#1b1b1b] text-[#d9d9d9]'>
                  Who to follow?
                </div>
            </div>
            <div className='rounded-[20px] w-[50%]  h-full  max-h-[80vh] text-[#d9d9d9] hideoverflow overflow-y-scroll '>
                    {/* <div class="relative flex flex-col items-center rounded-[20px] p-4 bg-[#1b1b1b] text-[#d9d9d9] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
                            <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
                                <img alt="" src={loggedInUser[0]?.coverImage} className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"/> 
                                <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                                    <img className="h-full w-full rounded-full" src={loggedInUser[0]?.profileImage} alt="" />
                                </div>
                            </div> 
                            <div className="mt-16 flex flex-col items-center">
                                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                                Adela Parkson
                                </h4>
                                <p className="text-base font-normal text-gray-600">Product Manager</p>
                            </div> 
                            <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
                                <div className="flex flex-col items-center justify-center">
                                <p className="text-2xl font-bold text-navy-700 dark:text-white">17</p>
                                <p className="text-sm font-normal text-gray-600">Posts</p>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                <p className="text-2xl font-bold text-navy-700 dark:text-white">
                                    9.7K
                                </p>
                                <p className="text-sm font-normal text-gray-600">Followers</p>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                <p className="text-2xl font-bold text-navy-700 dark:text-white">
                                    434
                                </p>
                                <p className="text-sm font-normal text-gray-600">Following</p>
                                </div>
                            </div>
                    </div>
                    <div class="relative flex flex-col items-center rounded-[20px]  p-4 bg-[#1b1b1b] text-[#d9d9d9] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
                            <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
                                <img alt="" src={loggedInUser[0]?.coverImage} className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"/> 
                                <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                                    <img className="h-full w-full rounded-full" src={loggedInUser[0]?.profileImage} alt="" />
                                </div>
                            </div> 
                            <div className="mt-16 flex flex-col items-center">
                                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                                Adela Parkson
                                </h4>
                                <p className="text-base font-normal text-gray-600">Product Manager</p>
                            </div> 
                            <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
                                <div className="flex flex-col items-center justify-center">
                                <p className="text-2xl font-bold text-navy-700 dark:text-white">17</p>
                                <p className="text-sm font-normal text-gray-600">Posts</p>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                <p className="text-2xl font-bold text-navy-700 dark:text-white">
                                    9.7K
                                </p>
                                <p className="text-sm font-normal text-gray-600">Followers</p>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                <p className="text-2xl font-bold text-navy-700 dark:text-white">
                                    434
                                </p>
                                <p className="text-sm font-normal text-gray-600">Following</p>
                                </div>
                            </div>
                    </div> */}
                    <Outlet/>
            </div>  
            <div className='flex flex-col gap-5 w-[15%]'>
                <div className='text-sm leading-loose rounded-[20px] w-full p-4 text-[#d9d9d9]'>
                  <ul>
                      <li>About</li>  
                      <li>Help Center</li>  
                      <li>Terms of Service</li>  
                      <li>Accessibilty</li>  
                      <li>Blog</li>
                      <li>Brand Resources</li>  
                      <li>Advertising</li>  
                      <li>Marketing</li>  
                      <li>Developers</li>  
                      <li>Directory</li>
                      <li>Settings</li>
                  </ul>
                </div>
            </div>            
        </div>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
                    {/* <Sidebar handleLogout={handleLogout} user={user}/> */}

            {/* <Widgets/> */}
            {/* <Outlet/> */}
    </div>
  )
}



export default Home