import "./App.css";
import React from "react";
import { Route, Link } from 'wouter'
import Home from "./pages/Home/";
import SearchResult from "./pages/SearchResult/";
import Detail from "./pages/Detail";
import GifsProvider from "./context/GifsContext";

function App() {

  return (
      <div className="App">
        <section className="App-content">

          <Link to='/'>
            <figure className="App-logo">
              <img alt='Giffy logo' src='/logo_giffy.png' />
            </figure>
          </Link>

          <GifsProvider >
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
              component={Detail}
            />
          </GifsProvider>
          
        </section>
      </div>
  );
}

export default App;
