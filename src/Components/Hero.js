import React from "react";
import styles from "./hero.module.css";

function Hero() {
  return (
    <section className={styles["hero-section"]}>
      <img src="/images/heroimg.jpeg" />
      <div className={styles["right-section"]}>
        <p className={styles["heading"]}>
          What is <span className={styles["font"]}>Carbos?</span>
        </p>
        <p className={styles["descrip"]}>
          <span style={{ fontSize: "24px" }}>R</span>educing carbon footprints
          and promoting sustainability. It offers a free carbon footprint
          calculator, personalized solutions for emission reduction, and
          partnerships with tree-planting organizations to offset carbon. The
          concept also envisions collaborations with eco-conscious companies for
          carbon-free services and achieving carbon neutrality.
        </p>
      </div>
    </section>
  );
}

export default Hero;
