import React from "react";

export default function IngredientItems({ item }) {
  return (
    <div>
      <img
        src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image}
        alt={item.name}
      />
      <h3>{item.name}</h3>
      <h3>
        {item.amount} {item.unit}
      </h3>
    </div>
  );
}
