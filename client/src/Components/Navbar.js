import React from "react"
import { Link } from "react-router-dom";

  const Navbar = () => {
    return (
      <div id="link"> 
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/catagories">Catagories</Link>
      </div>
    )
  }

export default Navbar;