import React from "react";
import styles from "./service.module.css";

function Service() {
  return (
    <section>
      <div className={styles["image-container"]}>
        <img
          className={styles["item"]}
          src="/images/planting.svg"
          alt="save_earth"
        />
        <img
          className={styles["item"]}
          src="/images/watering.svg"
          alt="save_earth"
        />
        <img
          className={styles["item"]}
          src="/images/love.svg"
          alt="save_earth"
        />
      </div>
    </section>
  );
}

export default Service;
