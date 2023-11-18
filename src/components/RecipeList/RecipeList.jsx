import React from "react";
import RecipeItem from "../RecipeItem/RecipeItem";
{
  /*Receiving the prop */
}
export default function RecipeList({ recipeData, setRecipeItemID }) {
  return (
    <div>
      {recipeData.map((recipeItem) => (
        <RecipeItem
          key={recipeItem.id}
          recipeItem={recipeItem}
          setRecipeItemID={setRecipeItemID}
        />
      ))}
    </div>
  );
}
