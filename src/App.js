import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPage from './Components/BlogPage/BlogPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Dashboard/>}></Route>

    <Route path="/BlogPage" element={<BlogPage/>}></Route>


    </Routes>
        

    </BrowserRouter>
  );
}

export default App;
