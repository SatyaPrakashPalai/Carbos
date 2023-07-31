import React from "react";
import styles from "./carbon-calculator.module.css";
function CarbosCalulator() {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles["image-container"]}>
        <img
          className={styles["img"]}
          src="/images/ss.png"
          alt="Carbos Calculator"
        />
      </div>
      <div className={styles["right-section"]}>
        <p className={styles["heading"]}>Carbos Calculator</p>
        <p className={styles["descrip"]}>
          <span style={{ fontSize: "24px" }}>T</span>he calculator allows users
          to input information about their daily tasks, such as transportation,
          energy consumption, and waste generation. Based on these inputs, the
          app calculates the user's carbon footprint and provides a clear
          indication of whether they should strive to reduce it.
        </p>
        <a
          target="_blamk"
          href="https://youtu.be/izF4LKSBULI"
          className={styles["live-demo"]}
        >
          Live Demo
        </a>
      </div>
    </section>
  );
}

export default CarbosCalulator;
