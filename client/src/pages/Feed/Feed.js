import React from 'react'
import '../Page.css'
import './Feed.css'
import TweetBox from './TweetBox/TweetBox'

const Feed = () => {
  return (
    <div className="feed">
        <div className="feed_header">
            <h2>Home</h2>
        </div>
        <TweetBox />
    </div>
  )
}

export default Feed