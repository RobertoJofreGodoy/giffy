import "./App.css";
import React from "react";
import ListOfGifs from "./components/ListOfGifs/";

import { Route, Link } from 'wouter'
import Home from "./pages/Home/";

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
          component={ListOfGifs} 
        />

        <Route 
          path="/gif/:id"
        />
        
      </section>
    </div>
  );
}

export default App;
