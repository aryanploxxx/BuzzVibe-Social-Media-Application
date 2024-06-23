import React from 'react'
import './SidebarOptions.css'

const SidebarOptions = ({active, text, Icon}) => {
  return (
    <div className={`sidebarOptions ${active && 'sidebarOptions_active'}`}>
        <Icon className='text-indigo-600'/>
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOptions