import React from "react";
import IngredientItems from "../IngredientItems/IngredientItems";
export default function Ingredients({ foodItem, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        foodItem.extendedIngredients.map((item) => (
          <IngredientItems item={item} />
        ))
      )}
    </div>
  );
}
