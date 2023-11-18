import React from "react";
export default function RecipeItem({ recipeItem }) {
  return (
    <div>
      <img src={recipeItem.image} alt={recipeItem.title} />
      <h1>{recipeItem.title}</h1>
      <button>View Recipe</button>
    </div>
  );
}
