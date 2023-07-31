import React from "react";
import styles from "./hero2.module.css";

function Hero2() {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles["left-section"]}>
        <p className={styles["heading"]}>
          What is{" "}
          <span className={styles["font"]}>
            <span className={styles["span"]}>Carbon </span>
          </span>
          footprint?
        </p>
        <p className={styles["descrip"]}>
          <span style={{ fontSize: "24px" }}>A</span> carbon footprint is a
          measure of the total greenhouse gas emissions produced directly or
          indirectly by an individual, organization, product, or event. These
          emissions primarily consist of carbon dioxide (CO2) and other
          greenhouse gases, which contribute to global warming and climate
          change.
        </p>
      </div>
      <img src="/images/hero2.png" alt="save environment" />
    </section>
  );
}

export default Hero2;
