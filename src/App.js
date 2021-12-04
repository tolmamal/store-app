import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './containers/Home/Home';
import NewProduct from './containers/NewProduct/NewProduct';
import SearchProduct from './containers/SearchProduct/SearchProduct';

import './App.css';

function AppRouter() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/newprod" element={<NewProduct/>}/>
                    <Route path="/searchprod" element={<SearchProduct/>}/>
                </Routes>
            </div>
        </Router>
    );
}


function App() {
    return (
        <div className="App">
            <AppRouter/>
        </div>
    );
}

export default App;
