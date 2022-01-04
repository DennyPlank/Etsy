import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Catagories from './Pages/Catagories';
import Home from './Pages/Home';
import Products from './Pages/Products';

function App() {
  return (
    <div>
        <Navbar />
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/catagories" element={<Catagories />}/>
          </Routes>
    </div>
  );
}

export default App;
