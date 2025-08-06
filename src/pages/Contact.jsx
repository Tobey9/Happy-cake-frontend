import React from "react";
import styles from "./styles/Contact.module.css";
import { GiCakeSlice } from "react-icons/gi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.left}>
        <GiCakeSlice className={styles.icons} />
        <h2>Happy Cake</h2>
      </div>

      <div className={styles.right}>
        <FaXTwitter className={styles.icons} />
        <FaFacebookF className={styles.icons} />
        <FaLinkedinIn className={styles.icons} />
      </div>
    </div>
  );
};
