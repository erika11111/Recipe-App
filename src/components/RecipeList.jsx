import React from "react";
{
  /*Receiving the prop */
}
export default function RecipeList({ recipeData }) {
  return (
    <div>
      {recipeData.map((recipeItem) => (
        <h1>{recipeItem.title}</h1>
      ))}
    </div>
  );
}
