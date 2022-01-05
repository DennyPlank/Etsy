import React, { useEffect, useState } from 'react' 
import axios from 'axios'
const Products = () => {
  useEffect(()=>{
    getProducts();
  }, [])

  const [products, setProducts] = useState([])
  
  const getProducts = async () => {
    let res = await axios.get("/api/categories")
    setProducts(res.data)
  };
  const renderProducts = () => {
    let count = 0
   return products.map((product)=>{
      count +=  1
      return (
        <div>
          <hr />
          {`${count}) ${product.product_name}: $${product.price} seller: ${product.seller_name}`}
        </div>
      )
    });
  };
  
  return (
   <div>{renderProducts()}</div>
  )
};

export default Products;