import React from "react";
import Cart from "./components/Cart";
import "./app.css";
import { movies } from "./data";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="app_container">
        {movies.map((movie) => (
          <Cart movie={movie} />
        ))} 
      </div>
    </div>
  );
};

export default App;
