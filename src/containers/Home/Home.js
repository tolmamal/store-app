import React from 'react';
import TopNav from "./Nav/TopNav";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-main">
            <TopNav />
            {/*<div className="topnav">*/}
            {/*    <a className="active" href="#home">Home</a>*/}
            {/*    <a href="/newprod" >Add Product</a>*/}
            {/*    <a href="/searchprod" >Search Product</a>*/}

            {/*</div>*/}
            <div className="main-title">
                <p>Online Store</p>
            </div>


        </div>
    );

};


export default Home;
