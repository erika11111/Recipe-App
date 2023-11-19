import { useEffect } from "react";
import { useState } from "react";
import styles from "./recipeDetails.module.css";
import Ingredients from "../Ingredients/Ingredients";
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
    <div className={styles.recipeCard}>
      <h1 className={styles.title}>{foodItem.title} </h1>
      <img className={styles.image} src={foodItem.image} alt={foodItem.title} />
      <div className={styles.details}>
        <span>
          <strong>🕙 {foodItem.readyInMinutes} minutes</strong>
        </span>
        <span>
          <strong>👨‍👩‍👧 Serving size {foodItem.servings} </strong>
        </span>
        <span>
          <strong>
            {foodItem.vegetrian ? "🥕 Vegetarian" : "🥩 Non-Vegetarian"}
          </strong>{" "}
        </span>
      </div>
      <div className={styles.price}>
        <span>
          <strong>
            € {(foodItem.pricePerServing / 100).toFixed(2)} Per serving
          </strong>
        </span>
      </div>
      <div>
        <h2>Ingredients</h2>
        <Ingredients foodItem={foodItem} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.instructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              foodItem.analyzedInstructions[0].steps.map((item) => (
                <li>{item.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
