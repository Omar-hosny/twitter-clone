import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search input" type="text" />
      </div>
      <div className="widgets__weidgetsContainer">
        <h2>What's happening ?</h2>

        <TwitterTweetEmbed tweetId={"1299744993997926400"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="omar_hosny"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.linkedin.com/in/omar-hosny72/"}
          options={{ text: "#reactjs is awesome i love it", via: "omar_hosny" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
