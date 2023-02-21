import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Nav from '../Navbar/Nav';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

const Dashboard = (props) => {
  const {posts, setPosts} = props;
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();




 

  const removePost = (index) => {
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts);
  };

  const handleNavClick = () => {
    navigate('/BlogPage');
  };

  return (
      <div>
        <Nav />
        Your posts
        {posts.length > 0 ? (
          <div>
            <p>You have {posts.length} posts</p>
            {posts.map((value, index) => (
              <div key={index} className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <button onClick={() => removePost(index)}>
                    <i className="fa-sharp fa-solid fa-x"></i>
                  </button>
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">{value}</p>
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
