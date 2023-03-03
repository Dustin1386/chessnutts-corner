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
  
  const handleSubmit = (event) => {
    if (enabled) {
      const updatedPosts = [...posts, {_id: unique_id, name: value}];
      setPosts(updatedPosts);
      console.log(value);
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
