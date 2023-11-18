import { useEffect } from "react";
import { useState } from "react";
export default function RecipeDetails({ recipeItemID }) {
  const [foodItem, setFoodItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
    }
    fetchRecipeContent();
  }, [recipeItemID]);

  return (
    <div>
      <div>
        <h1>{foodItem.title} </h1>
        <img src={foodItem.image} alt={foodItem.title} />
        <div>
          <span>
            <strong>🕙 {foodItem.readyInMinutes} minutes</strong>
          </span>
          <span>
            <strong>Serving size 👨‍👩‍👧 {foodItem.servings} </strong>
          </span>
          <span>
            {foodItem.vegetrian ? "🥕 Vegetarian" : "🥩 Non-Vegetarian"}
          </span>
        </div>
        <div>
          <span>
            € {(foodItem.pricePerServing / 100).toFixed(2)} Per serving
          </span>
        </div>
      </div>
      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          foodItem.analyzedInstructions[0].steps.map((step) => (
            <li>{step.step}</li>
          ))
        )}
      </div>
    </div>
  );
}
