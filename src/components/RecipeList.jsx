import React from "react";
import RecipeItem from "./RecipeItem";
{
  /*Receiving the prop */
}
export default function RecipeList({ recipeData }) {
  return (
    <div>
      {recipeData.map((recipeItem) => (
        <RecipeItem key={recipeItem.id} recipeItem={recipeItem} />
      ))}
    </div>
  );
}
