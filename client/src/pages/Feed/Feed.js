import React, { useEffect, useState } from 'react'
import '../Page.css'
import './Feed.css'
import TweetBox from './TweetBox/TweetBox'
// import axios from 'axios'
import Post from './Post/Post'

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://buzzvibe-social-media-backend.onrender.com/post')
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
  },[posts])
  // We changed the dependency, this means whenever posts changes, the entire page will re-render

  return (
    <div className="feed">
        <div className="sticky top-0 z-100 py-[10px] px-[20px] text-[#0f0e0e] font-bold bg-[#fbd050e6]">
            <h2 className='text-2xl'>Home</h2>
        </div>
        <TweetBox />
        {
          posts.map(p => 
            <Post key={p._id} p={p} />
          )
        }
    </div>
  )
}

export default Feed