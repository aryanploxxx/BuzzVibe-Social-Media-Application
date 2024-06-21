import React, { useState } from 'react'
import './Sidebar.css'
import { FaTwitter } from "react-icons/fa";
import SidebarOptions from './SidebarOptions';
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { MdPermIdentity } from "react-icons/md";
import { FaEllipsisH } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { Button, Avatar, IconButton } from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom'
import CustomLink from './CustomLink'


const Sidebar = ({handleLogout, user}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);  
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

  return (
    <div className='sidebar'>
        <FaTwitter className='sidebar_twitterIcon' />
        <CustomLink to='/home/feed'>
            <SidebarOptions active Icon={IoMdHome} text='Home' />
        </CustomLink>
        <CustomLink to='/home/explore'>
            <SidebarOptions active Icon={FaSearch} text='Explore' />
        </CustomLink>
        <CustomLink to='/home/notifications'>
            <SidebarOptions active Icon={IoIosNotifications} text='Notifications' />
        </CustomLink>
        <CustomLink to='/home/messages'>
            <SidebarOptions active Icon={MdOutlineMail} text='Messages' />
        </CustomLink>
        <CustomLink to='/home/bookmarks'>
            <SidebarOptions active Icon={FaBookmark} text='Bookmarks' />
        </CustomLink>
        <CustomLink to='/home/lists'>
            <SidebarOptions active Icon={FaRegListAlt} text='Lists' />
        </CustomLink>
        <CustomLink to='/home/profile'>
            <SidebarOptions active Icon={MdPermIdentity} text='Profile' />
        </CustomLink>
        <CustomLink to='/home/more'>
            <SidebarOptions active Icon={FaEllipsisH} text='More' />
        </CustomLink>
        
        <Button variant='outlined' className='sidebar_tweet'>
            Tweet
        </Button>

        <div className="Profile_info">
            <Avatar src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'></Avatar>
            <div className='user_info'>
                <h4>Aryan Gupta</h4>
                <h5>@aryan</h5>
            </div>
            <IconButton size ='small' sx ={{ ml: 2}} aria-controls={openMenu ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={openMenu ? "true" : undefined} onClick={handleClick}>
                <FaEllipsisH />
            </IconButton>
            <Menu id='basic-menu' anchorEl={anchorEl} open={openMenu} onClick={handleClose} onClose={handleClose}>
                <MenuItem className='Profile_info1'>
                    <Avatar src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'></Avatar>
                    <div className='user_info subuser_info'>
                        <div>
                            <h4>Aryan Gupta</h4>
                            <h5>@aryan</h5>
                        </div>
                        <MdOutlineDone className='done_icon'></MdOutlineDone>
                    </div>
                </MenuItem>
                <Divider/>
                <MenuItem onClick={handleClose}> Add an existing account </MenuItem>
                <MenuItem onClick={handleLogout}> Log Out @aryan </MenuItem>
            </Menu>
        </div>
    </div>
  )
}

export default Sidebar