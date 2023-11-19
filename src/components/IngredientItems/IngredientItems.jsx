import React from "react";
import styles from "./IngredientItems.module.css";
export default function IngredientItems({ item }) {
  return (
    <div>
      <div className={styles.itemContainer}>
        <div>
          <img
            className={styles.image}
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
            alt={item.name}
          />
        </div>
        <div className={styles.text}>
          <div className={styles.title}>
            <h3>{item.name}</h3>
          </div>
          <div className={styles.amount}>
            <h3>
              {item.amount} {item.unit}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
