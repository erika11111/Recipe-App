import React from "react";
import styles from "./nav.module.css";
import { GiMeal } from "react-icons/gi";
export default function Nav() {
  return (
    <div className={styles.nav}>
      {" "}
      <GiMeal className={styles.icon} /> Recipe App
    </div>
  );
}
