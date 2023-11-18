import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./search.module.css";
//splitting GET request URL
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "35d28329def94a19a13965a8fc9089f3";

export default function Search({ recipeData, setRecipeData }) {
  //it allows search bar input
  const [query, setQuery] = useState("pizza");
  //when search bar is updated, the component makes an API call
  useEffect(() => {
    async function fetchRecipes() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      //response is going to be in JSON, and needs to be decoded
      const data = await res.json();
      //setting setRecipeData array to data.results
      console.log(data.results);
      setRecipeData(data.results);
    }
    fetchRecipes();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
