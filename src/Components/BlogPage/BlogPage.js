import React, { useState } from 'react'

const BlogPage = () => {

  const [value, setValue] = useState('');
  const [enabled, setEnabled] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [posts, setPosts] = useState([]);


  const handleInputChange = (event) => {
    setValue(event.target.value);
    value.length > 4 && setEnabled(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setPosts([...posts, value]);
    setEnabled(false);
    setValue(''); // reset the input field after submitting
  };
  return (
    <div>
          <div>
          <p>add your new blog here</p>
          <button onClick={() => setClicked(true)} type="button" className="btn btn-primary">
            <i className="fas fa-plus"></i>
          </button>
          {clicked === true || posts.length > 0 ? (
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
