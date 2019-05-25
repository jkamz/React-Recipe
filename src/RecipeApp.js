import React from "react";
import Recipe from "./Recipe";
import Navbar from "./Navbar";
import "./RecipeApp.css";

function RecipeApp() {
  return (
    <div className="App">
      <Navbar />
      <Recipe
        title="Pasta"
        ingredients={["flour", "water"]}
        instructions="mix ingredients"
        img="spaghetti.jpg"
      />
    </div>
  );
}

export default RecipeApp;
