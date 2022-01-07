import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Catagories from './Pages/Catagories';
import Home from './Pages/Home';
import Products from './Pages/Products';
import ProductSearch from './Pages/ProductSearch';
import { Container } from "semantic-ui-react";


function App() {
  return (
    <div>
        <Navbar />
        <Container style={{ margin: 20 }}>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/productsearch" element={<ProductSearch />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/catagories" element={<Catagories />}/>
          </Routes>
        </Container>
    </div>
  );
}

export default App;
