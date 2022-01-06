import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductSearch = () => {
  const [products, setProducts] =useState([])

// useEffect(()=>{
//   getProducts();
// })

const getProducts = async() => {
  let res = await axios.get('/api/products')
  setProducts(res.data)
}
  return (
    <div> 
      <p> Product Match Here </p>
    </div>
  )
};

export default ProductSearch;