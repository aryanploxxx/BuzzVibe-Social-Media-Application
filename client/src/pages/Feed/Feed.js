import React, { useEffect, useState } from 'react'
import '../Page.css'
import './Feed.css'
import TweetBox from './TweetBox/TweetBox'
// import axios from 'axios'
import Post from './Post/Post'

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/post')
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
  },[posts])
  // We changed the dependency, this means whenever posts changes, the entire page will re-render

  return (
    <div className="feed">
        <div className="feed_header">
            <h2>Home</h2>
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