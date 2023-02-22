import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPage from './Components/BlogPage/BlogPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [posts, setPosts] = useState(['one']);

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Dashboard posts={posts} />}></Route>
    <Route path="/BlogPage" element={<BlogPage posts={posts} setPosts={setPosts}/>}></Route>


    </Routes>
        

    </BrowserRouter>
  );
}

export default App;
