import "./App.css";
import React from "react";
import { Route, Link } from 'wouter'

import Home from "./pages/Home/";
import SearchResult from "./pages/SearchResult/";

function App() {

  return (
    <div className="App">
      <section className="App-content">

        <Link to='/'><h1>Giffy</h1></Link>

        <Route 
          path="/"
          component={Home}
        />

        <Route 
          path="/search/:keyword" 
          component={SearchResult} 
        />

        <Route 
          path="/gif/:id"
        />
        
      </section>
    </div>
  );
}

export default App;
