import React from "react";
import styles from "./ContactMe.module.css";

const ContactMe = () => {
  return (
    <div className={styles["contactme-principal"]}>
      <div className={styles["contactme-title"]}>
        <div className={styles["content"]}>
          <p className={styles["contactme-p"]}>[</p>
          <p className={styles["contactme-p"]}>Contactame</p>
          <ul className={styles["contactme-ul"]}>
            <li className={styles["contactme-li"]}>Aqui</li>
            <li className={styles["contactme-li"]}>Ahora!</li>
          </ul>
          <p className={styles["contactme-p"]}>]</p>
        </div>
      </div>
        <div className={styles["astronauta-contactme"]}>
          <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1683652448/asroKG4fzae8CkIT4lBmL-transformed-removebg-preview_rugo0u.png" />
        </div>
      <div className={styles["contactme-icons"]}>
        <a
          className={styles["a-contactme"]}
          href="mailto:diame.cjs@gmail.com"
          target="_blank"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2875/2875394.png"
          />
        </a>
        <a
          className={styles["a-contactme"]}
          href="https://www.linkedin.com/in/diamela-lares-"
          target="_blank"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1383/1383262.png"
          />
        </a>
        <a
          className={styles["a-contactme"]}
          href="https://www.github.com/diamecjs"
          target="_blank"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2504/2504911.png"
          />
        </a>
        <a
          className={styles["a-contactme"]}
          href="https://wa.me/573215864622"
          target="_blank"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1383/1383269.png"
          />
        </a>
      </div>
      <div>
        <a
          href="https://drive.google.com/file/d/1y9V5uwG8g1e70uBTwcIqPAbgXnWhx2hU/view?usp=sharing"
          target="_blank"
          download="CV Diamela"
        >
          <button className={styles["button-descarga"]}>
            Descarga Curriculum
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
