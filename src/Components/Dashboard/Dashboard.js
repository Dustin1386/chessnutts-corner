import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Nav from '../Navbar/Nav';




const Dashboard = () => {
    const [clicked, setClicked] = useState(false);
    const [value, setValue] = useState('');
    const [enabled, setEnabled] = useState(false)
    const [posts, setPosts] = useState([]);
    const handleInputChange = (event) => {
        setValue(event.target.value);
        value.length > 4 && setEnabled(true)
      }
    const handleSubmit = (event) => {
        event.preventDefault();
        setPosts([...posts, value]);
        setEnabled(false)
        setValue(''); // reset the input field after submitting
      };
      const removePost = (index) => {
        const newPosts = [...posts];
        newPosts.splice(index, 1);
        setPosts(newPosts);
      }
      
  return (
    <div>
    <Nav />
      <div>
        <p>add your new blog here</p>
        <button
          onClick={() => setClicked(true)}
          type="button"
          className="btn btn-primary"
        >
          <i className="fas fa-plus"></i>
        </button>
        {clicked === true || posts.length > 0 ? (
          <div>
            <form onSubmit={handleSubmit}>
              <input type="text" value={value} onChange={handleInputChange} />
              <button type="submit" disabled={!enabled}>Submit</button>
            </form>
          </div>
        ) : null}
      </div>
      Your posts
      {posts.length > 0 ? (
  <div>
    <p>You have {posts.length} posts</p>
    {posts.map((value, index) => (
  <div key={index} className="card" style={{ width: "18rem" }}>
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
): <p>You have no posts</p>}

    </div>
  );
}

export default Dashboard

