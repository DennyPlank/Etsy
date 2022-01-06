import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Catagories from './Pages/Catagories';
import Home from './Pages/Home';
import Products from './Pages/Products';
import ProductSearch from './Pages/ProductSearch';

function App() {
  return (
    <div>
        <Navbar />
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/productsearch" element={<ProductSearch />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/catagories" element={<Catagories />}/>
          </Routes>
    </div>
  );
}

export default App;
