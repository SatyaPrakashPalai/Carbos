import React from "react";
import styles from "./contact.module.css";

function Contact() {
  return (
    <section className={styles["section-wrapper"]}>
      <div className={styles["left-section"]}>
        <span>Contact us</span>
        <div className={styles["desc"]}>
          <h3>Contributed by</h3>
          <a
            href="https://www.linkedin.com/in/haruki25/"
            target="_blank"
            className={styles["profile"]}
          >
            <img className={styles["linkedin"]} src="/images/linkedin.svg" />
            <p>Piyush Soni</p>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/satya-prakash-palai-94b314214/"
            className={styles["profile"]}
          >
            <img className={styles["linkedin"]} src="/images/linkedin.svg" />
            <p>Satya Prakash Palai</p>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jayash-sahu-8b6880229/"
            className={styles["profile"]}
          >
            <img className={styles["linkedin"]} src="/images/linkedin.svg" />
            <p>Jayash Sahu</p>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/amisha-kumari-219389257/"
            className={styles["profile"]}
          >
            <img className={styles["linkedin"]} src="/images/linkedin.svg" />
            <p>Amisha Kumari</p>
          </a>
          {/* <p>
            <a href="mailto:sp8368755@gmail.com">sp8368755@gmail.com</a>
          </p>
          <p>9821075728</p> */}
        </div>
      </div>
      <body className={styles["contact-section"]}>
        <main className={`${styles.main} ${styles.page__main}`}>
          <form
            className={`${styles.form} ${styles.main__form}`}
            action="javascript:void(0);"
            method="POST"
          >
            <div className={styles["form__linput"]}>
              <label className={styles["form__label"]} for="yname">
                Your Name
              </label>
              <input
                className={styles["form__input"]}
                id="yname"
                type="text"
                name="yname"
                placeholder="Your name..."
              />
            </div>
            <div className={styles["form__linput"]}>
              <label className={styles["form__label"]} for="email">
                Email ID
              </label>
              <input
                className={styles["form__input"]}
                id="email"
                type="text"
                name="email"
                placeholder="Your email id..."
              />
            </div>

            <div className={styles["form__linput"]}>
              <label className={styles["form__label"]} for="subject">
                Subject
              </label>
              <textarea
                className={styles["form__textarea"]}
                id="subject"
                name="subject"
                placeholder="Write something.."
                rows="7"
              ></textarea>
            </div>
            <button
              className={`${styles.primary__btn} ${styles.form__btn}`}
              type="submit"
            >
              Submit
            </button>
          </form>
        </main>
      </body>
    </section>
  );
}

export default Contact;
