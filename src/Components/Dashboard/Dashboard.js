import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Nav from '../Navbar/Nav';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import BlogPage from '../BlogPage/BlogPage';
import axios from 'axios';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

const Dashboard = (props) => {
  const [posts, setPosts] = useState([]);
  const [clicked, setSelectedPost] = useState(false)
  const [clickedPostIndex, setClickedPostIndex] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/data');
      const data = await response.json();
      setPosts(data);
    }
    fetchData();
  }, []);
 
  const postPreview = (post) => {
    post =  console.log(post.name?.split(' ').slice(0, 50))
      console.log(post)
  }


  const clickedPost = (index) => {
    const postId = [...posts].reverse()[index]._id; // extract the _id of the post
    const newPosts = [...posts].reverse();
    setClickedPostIndex(newPosts.findIndex(post => post._id === postId));
    setPosts(newPosts);
    setSelectedPost(true)
    axios.get(`http://localhost:3000/data/${postId}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
  };
  const removePost = (index) => {
    const postId = [...posts].reverse()[index]._id; // extract the _id of the post
    console.log(postId)
    const newPosts = [...posts].reverse();
    console.log(postPreview(index, [...posts]))
    newPosts.splice(index, 1);
    setPosts(newPosts);
    axios.delete(`http://localhost:3000/data/${postId}`)
      .then(response => {
        console.log('Post deleted successfully!');
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
  };

  const editPost = (index) => {
    const postId = [...posts].reverse()[index]._id; // extract the _id of the post
    const newPosts = [...posts].reverse();
    console.log(postPreview(index, [...posts]))
    newPosts.splice(index, 1);
    setPosts(newPosts);
    axios.delete(`http://localhost:3000/data/${postId}`)
      .then(response => {
        console.log('Post deleted successfully!');
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
  };


  return (
      <div>
        <Nav />
        <BlogPage />
        Your posts
        {posts.length > 0 ? (
          <div>
            <p>You have {posts.length} posts</p>
            {[...posts].reverse().map((value, index) => (
              <div key={index} className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <button onClick={() => removePost(index)}>
                    <i className="fa-sharp fa-solid fa-x"></i>
                  </button>
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <button onClick={() => clickedPost(index)}>
                    <i className="fa-sharp fa-solid fa-+"></i>
                  </button>
                  {clicked === true && clickedPostIndex === index &&(
                  <h5>{(value.name)}</h5>
                  )}
                 
                  <p className="card-text">{value.name.split(' ').slice(0, 50).join(' ')}</p>
                  <p className="card-text">{value?._id}</p>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>You have no posts</p>
        )}
      </div>
  );
};

export default Dashboard;
