import React from "react";
import RecipeList from "./RecipeList";
import Navbar from "./Navbar";
import "./RecipeApp.css";

function RecipeApp() {
  return (
    <div className="App">
      <Navbar />
      <RecipeList />
    </div>
  );
}

export default RecipeApp;
