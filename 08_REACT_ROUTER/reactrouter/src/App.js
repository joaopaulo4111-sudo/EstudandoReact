import './App.css';

// 1 - config react router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product.js';
import Info from './pages/Info.js';
import NotFound from './pages/NotFound.js';
import Search from './pages/Search.js';

// Components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm.js';

function App() {
  return (
    <div className = "App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar/>
        {/* 9 - search */}
        <SearchForm/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/About' element = {<About/>}/>
          {/* 6 - nested routes */}
          <Route path='/Products/:id/info' element={<Info/>}/>
          <Route path='/Product/:id' element={<Product/>}/>
          {/* 9- search route */}
          <Route path='/search' element={<Search/>}/>
          {/* 10 - Redirect */}
          <Route path='/company' element={<Navigate to ="/about"/>}/>
          {/* 7 - No match route */}
          <Route path = "*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
