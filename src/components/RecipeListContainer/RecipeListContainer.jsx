import React from "react";
import styles from "./recipeListContainer.module.css";
export default function ViewContainer({ children }) {
  return <div className={styles.parentContainer}>{children}</div>;
}
