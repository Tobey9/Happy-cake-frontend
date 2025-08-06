import React from "react";
import styles from "./styles/Main.module.css";

export const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <h1>Delight in Every Little Slice</h1>
        <p>
          Discover the charm of our handcrafted mini cakes — lovingly made in
          small batches with premium ingredients, perfect for special occasions
          or everyday indulgence. Whether you're celebrating a birthday, sending
          a sweet gift, or simply craving a bite of happiness, our cakes bring
          joy in every layer. Freshly baked, beautifully packaged, and always
          delicious.
        </p>
        <button>Treat Yourself</button>
      </div>
      <div className={styles.right}>
        <img
          src="https://images.unsplash.com/photo-1715533482956-4a8a362b863c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cake main page"
        />
      </div>
    </div>
  );
};
