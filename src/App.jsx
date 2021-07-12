import "./App.css";
import React from "react";
import ListOfGifs from "./components/ListOfGifs";

import { Route, Link } from 'wouter'

function App() {

  return (
    <div className="App">
      <section className="App-content">

        <h1>Giffy</h1>

        <Link to="/gif/ciri">Gifs de Ciri</Link>
        <Link to="/gif/geralt">Gifs de Geralt</Link>
        <Link to="/gif/yennefer">Gifs de Yennefer</Link>

        <Route 
          path="/gif/:keyword" 
          component={ListOfGifs} 
        />
        
      </section>
    </div>
  );
}

export default App;
