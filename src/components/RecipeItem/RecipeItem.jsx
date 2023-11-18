import React from "react";
import styles from "./recipeItem.module.css";
export default function RecipeItem({ recipeItem }) {
  return (
    <div className={styles.itemContainer}>
      <img
        className={styles.itemImage}
        src={recipeItem.image}
        alt={recipeItem.title}
      />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{recipeItem.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.viewButton}>View Recipe</button>
      </div>
    </div>
  );
}
