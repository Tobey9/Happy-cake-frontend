import React from "react";
import styles from "./styles/AboutUs.module.css";

export const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <h2>About Us</h2>
      <p>
        Welcome to Happy Cake! We’re a small, passionate cake business dedicated
        to making every celebration a little sweeter.
        <br /> What started as a hobby in our cozy kitchen soon turned into a
        dream come true—sharing our homemade cakes with the world.
        <br /> Every cake we bake is made with love, high-quality ingredients,
        and a big spoonful of care.
        <br /> Whether you're looking for a custom birthday cake, a box of
        cupcakes, or just a little treat for yourself, we’re here to help you
        create sweet memories.
        <br /> Thank you for supporting our small business. <br />
        Your smiles are what keep our oven warm! <br />
        <br /> With love, Emily Founder & Baker, Happy Cake 🍰
      </p>
    </div>
  );
};
