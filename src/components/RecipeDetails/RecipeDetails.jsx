import { useEffect } from "react";
import { useState } from "react";
export default function RecipeDetails({ recipeItemID }) {
  const [foodItem, setFoodItem] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${recipeItemID}/information`;
  const API_KEY = "35d28329def94a19a13965a8fc9089f3";

  useEffect(() => {
    async function fetchRecipeContent() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      //response is going to be in JSON, and needs to be decoded
      const data = await res.json();
      //setting setRecipeData array to data
      console.log(data);
      setFoodItem(data);
    }
    fetchRecipeContent();
  }, [recipeItemID]);

  return (
    <div>
      Recipe Details {recipeItemID}
      {foodItem.title}
      <img src={foodItem.image} alt={foodItem.title} />
    </div>
  );
}
