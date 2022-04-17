import React, { useState } from "react"
import './App.css';
import Post from './Post'

function App() {
  const [posts, setPosts] = useState([
    {
      username: "cleverqazi",
      caption: "WOW it works",
      imageUrl: "https://cdn.pixabay.com/photo/2022/04/02/12/32/easter-tree-7106933_960_720.jpg"
    },
    {
      username: "cleverqazi",
      caption: "WOW it works",
      imageUrl: "https://cdn.pixabay.com/photo/2022/04/02/12/32/easter-tree-7106933_960_720.jpg"
    }
  ]);

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
