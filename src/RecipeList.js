import React, { Component } from "react";
import PropTypes from "prop-types";
import Recipe from "./Recipe";
import "./RecipeList.css";

class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: "Rice",
        instructions:
          "Open jar of Rice.  Bring to simmer.  Boil water.  Cook rice until done.  Combine rice and sauce",
        ingredients: ["rice", "8 cups water", "1 box spaghetti"],
        img: "spaghetti.jpg"
      },
      {
        title: "Milkshake",
        instructions: "Combine ice cream and milk.  Blend until creamy",
        ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
        img: "milkshake.jpg"
      },
      {
        title: "Avocado Toast",
        instructions:
          "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
        ingredients: [
          "2 slices of bread",
          "1 avocado",
          "1 tablespoon olive oil",
          "1 pinch of salt",
          "pepper"
        ],
        img: "avocado_toast.jpg"
      }
    ]
  };

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object)
  };
  render() {
    const recipes = this.props.recipes.map((x, idx) => (
      <Recipe key={idx} {...x} />
    ));
    return <div className="recipe-list">{recipes}</div>;
  }
}

export default RecipeList;
