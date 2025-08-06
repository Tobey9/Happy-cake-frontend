import React, { useEffect, useState } from "react";
import styles from "./styles/Menu.module.css";
import { MenuCard } from "../components/MenuCard";
import axios from "../config/axiosConfig";

export const Menu = () => {
  const [loading, setLoading] = useState(true);
  const [food, setFood] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/foods");
        console.log("fetch data", response.data);
        setFood(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.menu}>
      <h2>Our Special Menus</h2>

      <MenuCard foods={food} />
    </div>
  );
};
