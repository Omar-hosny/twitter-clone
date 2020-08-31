import React, { useState } from "react";
import { Button, Avatar } from "@material-ui/core";
import "./TweetBox.css";

import db from "../../firebase";
import firebase from "firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "omar hosny",
      username: "@omar_hosny",
      avatar:
        "https://pbs.twimg.com/profile_images/1082329176668033024/FjagoXHr_400x400.jpg",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1082329176668033024/FjagoXHr_400x400.jpg" />
          <input
            placeholder="what's happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text"
          />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional:Enter image url"
          type="text"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
