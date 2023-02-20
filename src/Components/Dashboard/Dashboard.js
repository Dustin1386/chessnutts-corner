import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';




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
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Feasdfsdfsdftures
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <p>add your new blog here</p>
        <button
          onClick={() => setClicked(true)}
          type="button"
          className="btn btn-primary"
        >
          <i className="fas fa-plus"></i>
        </button>
        {clicked == true ? (
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

