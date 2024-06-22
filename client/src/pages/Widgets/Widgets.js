import React from "react";
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets_widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1800275692107465059"} />

        <TwitterTimelineEmbed sourceType="profile" screenName="MrBeast" options={{ height: 400 }} />


      </div>
    </div>
  );
}

export default Widgets;