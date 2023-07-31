import React from "react";
import styles from "./hero3.module.css";

function Hero3() {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles["left-section"]}>
        <span className={styles["heading"]}>
          The average carbon footprint of a global citizen is approximately
        </span>
      </div>
      <div className={styles["right-section"]}>
        <span>4.7 tonnes</span>
      </div>
    </section>
  );
}

export default Hero3;
