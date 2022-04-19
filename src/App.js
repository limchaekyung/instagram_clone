import React, { useState, useEffect } from "react"
import './App.css';
import Post from './Post'
import { db } from "./firebase"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from "@material-ui/core";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // this is where the code runs
    db.collection('posts').onSnapshot(snapshot => {
      // every time a new post is added, this code firebase
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    });
  }, [])

  const signUp = (event) => {

  }

  return (
    <div className="app">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form>
            <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
            <Input placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={signUp}>Sign Up</Button>
          </form>
        </div>
      </Modal>

      <div className="app__header">
        <center>
          <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
        </center>
      </div>

      <Button onClick={() => setOpen(true)}>Sign Up</Button>
      <h1>Hello</h1>

      {
        posts.map(({ id, post }) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
    </div >
  );
}

export default App;
