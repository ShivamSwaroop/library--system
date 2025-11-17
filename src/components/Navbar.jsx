import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";


export default function Navbar() {
return (
<nav className="nav">
<h2 className="brand">Online Library</h2>
<div className="links">
<NavLink to="/" className={({isActive})=>isActive?"active":""}>Home</NavLink>
<NavLink to="/books/All" className={({isActive})=>isActive?"active":""}>Browse Books</NavLink>
<NavLink to="/add-book" className={({isActive})=>isActive?"active":""}>Add Book</NavLink>
</div>
</nav>
);
}