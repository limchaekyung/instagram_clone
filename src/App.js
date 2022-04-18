import React, { useState, useEffect } from "react"
import './App.css';
import Post from './Post'
import { db } from "./firebase"

function App() {
  const [posts, setPosts] = useState([]);

  // useEffect -> Runs a piece of code based on a specific condition

  useEffect(() => {
    // this is where the code runs
    db.collection('posts').onSnapshot(snapshot => {
      // every time a new post is added, this code firebase
      setPosts(snapshot.docs.map(doc => doc.data()));
    });
  }, [])

  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
      </div>

      <h1>Hello</h1>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
      <Post username="sssangha" caption="WOW" imageUrl="https://cdn.pixabay.com/photo/2021/12/26/08/32/lantern-6894507_960_720.jpg" />
      <Post username="amaanath" caption="drama" imageUrl="https://cdn.pixabay.com/photo/2022/04/02/16/04/fox-7107267_960_720.jpg" />
    </div>
  );
}

export default App;
