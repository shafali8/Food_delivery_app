import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [menu,setMenu] = useState("shop")
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Shoppy</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to="/" className="nav-menu-text">Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link to="/men" className="nav-menu-text">Men </Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link to="/women" className="nav-menu-text" >Women</Link> {menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to="/kids" className="nav-menu-text" >Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button><Link to="/login"  className="nav-menu-text">Login</Link></button>
       <Link to="/cart" className="nav-menu-text"><img src={cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">0</div>
        </div>
    </nav>
  );
};

export default Navbar;
