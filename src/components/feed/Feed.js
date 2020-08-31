import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "../tweetBox/TweetBox";
import Post from "../post/Post";
import db from "../../firebase";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );

    // eslint-disable-next-line
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* tweet box */}
      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.data.displayName}
            username={post.data.username}
            avatar={post.data.avatar}
            verified={post.data.verified}
            image={post.data.image}
            text={post.data.text}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
