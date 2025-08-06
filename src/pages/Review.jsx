import React from "react";
import styles from "./styles/Review.module.css";

export const Review = () => {
  return (
    <div className={styles.reviews}>
      <h2>Customer Reviews</h2>
      <div className={styles.reviewsContainer}>
        <div className={styles.left}>
          <div className={styles.imageContainer}>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Female picture"
            />
          </div>
          <div className={styles.text}>
            <p>
              "Absolutely delicious cakes! I ordered the chocolate fudge cake
              for a birthday, and it was a huge hit. Everyone raved about how
              moist and flavorful it was – truly tasted homemade with
              high-quality ingredients. You can tell a lot of care goes into
              each one. My new go-to for all sweet treats!"
            </p>
            <h4>- Sarah M.</h4>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.imageContainer}>
            <img
              src="https://images.unsplash.com/photo-1591224615614-e300d72e37c5?q=80&w=451&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Male picture"
            />
          </div>
          <div className={styles.text}>
            <p>
              "I can't say enough good things about Happy Cake! I found them
              online for a last-minute party and was so impressed. The website
              was super easy to navigate, and the photos don't even do the cakes
              justice—they are stunning in person! My custom floral cake was not
              only a showstopper but tasted absolutely incredible. It was the
              perfect centerpiece for the celebration. Thank you for making the
              whole process so simple!"
            </p>
            <h4>- Erik J.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
