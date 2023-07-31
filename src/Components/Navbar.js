import React from "react";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={styles["navbar-wrapper"]}>
      <div className={styles["left-section"]}>
        <img className={styles["logo"]} src="/images/icon.png" />
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className={styles["right-section"]}>
        <h3>CARBOS</h3>
      </div>
    </nav>
  );
}

export default Navbar;
