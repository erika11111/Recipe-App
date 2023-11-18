import React from "react";
//splitting GET request URL

export default function RecipeItem({ recipeItem }) {
  return (
    <div>
      <img src={recipeItem.image} alt={recipeItem.title} />
      <h1>{recipeItem.title}</h1>
      <button>View Recipe</button>
    </div>
  );
}
