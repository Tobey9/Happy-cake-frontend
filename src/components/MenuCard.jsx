import React from "react";
import styles from "./styles/MenuCard.module.css";

export const MenuCard = ({ foods }) => {
  if (!foods) return null;

  return (
    <div className={styles.menuCard}>
      {foods.map((food, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={food.image} alt={food.title} />
          </div>
          <div className={styles.text}>
            <h4>{food.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};
