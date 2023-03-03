import axios from 'axios';
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';


const BlogPage = () => {
  const [posts, setPosts ] = useState([{name: ''}]);
  const [value, setValue] = useState('');
  const [enabled, setEnabled] = useState(false);
  const unique_id = uuid();
  
  const handleInputChange = (event) => {
    setValue(event.target.value);
    event.target.value.length > 4 ? setEnabled(true) : setEnabled(false);
  };
  const removePost = (index) => {
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts);
    axios.delete(`https://localhost:3000/data${posts}`)
    .then(response => {
      console.log('Post deleted successfully!');
    })
    .catch(error => {
      console.error('Error deleting post:', error);
    });

  };
  const handleSubmit = (event) => {
    event.preventDefault()
    if (enabled) {
      const updatedPosts = [...posts, {_id: unique_id, name: value}];
      setPosts(updatedPosts);
      console.log(updatedPosts);
      setValue('');
      setEnabled(false);
      axios.post('http://localhost:3000/data', updatedPosts[updatedPosts.length - 1])
        .then(response => console.log(response))
        .catch(error => console.error(error));
    }
  };
  
  
  return (
<div>
          <div>
          <p>add your new blog here</p>
          {posts?.length > 0 ? (
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
  );
}

export default BlogPage
