import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Info from "./Info";
  

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>TEENAGE MUTANT NINJA TURTLES</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li> 
            <li><NavLink to="/info">Info</NavLink></li> 
          </ul>
          <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/info" element={<Info />}/>
          </Routes>  
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;