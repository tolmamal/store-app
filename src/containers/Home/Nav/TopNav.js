import React from "react";
import "./TopNav.css";


const TopNav = () => {
    return (
        <div className="main">
            <div className="topnav">
                <a href="/">Home</a>
                <a href="/newprod" >Add Product</a>
                <a href="/searchprod" >Search Product</a>
            </div>
        </div>
    );


};

export default TopNav;