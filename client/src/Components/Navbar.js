import React from "react"
import { Link } from "react-router-dom";

  const Navbar = () => {
    return (
      <div id="navbar"> 
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/productsearch">Product Seach</Link>
        <Link to="/catagories">Catagories</Link>
      </div>
    )
  }

export default Navbar;