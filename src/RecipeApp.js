import React from "react";
import Recipe from "./Recipe";
import "./RecipeApp.css";

function RecipeApp() {
  return (
    <div className="App">
      <Recipe
        title="pasta"
        ingredients={["flour", "water"]}
        instructions="mix ingredients"
        img="spaghetti.jpg"
      />
    </div>
  );
}

export default RecipeApp;
