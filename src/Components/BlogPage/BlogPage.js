import axios from 'axios';
import React, { useEffect, useState } from 'react'

const BlogPage = (props) => {
//   const posts = ['mary', 'tim', 'drake'];
  const {posts, setPosts } = props;
  const [value, setValue] = useState('');
  const [enabled, setEnabled] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [newPost, setNewPost] = useState("");


  const handleInputChange = (event) => {
    setValue(event.target.value);
    value.length > 4 && setEnabled(true);
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
    const post = { title: newPost };
    axios.post("../../mockdata/db.json", post).then((response) => {
        setPosts([...posts, response.data]);
        setNewPost("")
    })
    setEnabled(false);
    setValue(''); // reset the input field after submitting
    
  };

  console.log(posts)
  return (
    <div>
          <div>
          <p>add your new blog here</p>
          <button onClick={() => setClicked(true)} type="button" className="btn btn-primary">
            <i className="fas fa-plus"></i>
          </button>
          {clicked === true || posts?.length > 0 ? (
            <div>
              <form onSubmit={handleSubmit}>
                <textarea type="text" value={value} onChange={handleInputChange} />
                <button type="submit" disabled={!enabled}>
                  Submit
                </button>
              </form>
            </div>
          ) : null}
        </div>
    </div>
  )
}

export default BlogPage
