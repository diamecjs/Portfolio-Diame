import React from "react";
import Navbar from "../Navbar/Navbar"
import Presentacion from "../Presentacion/Presentacion";
import AboutMe from "../AboutMe/AboutMe"
import ContactMe from "../ContactMe/ComtactMe";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import Technologies from "../Technologies/Technologies";
import styles from "./Home.module.css"


const Home = () => {

  return (
    <div className={styles["home-container"]}>
      <div className={styles["nav-home"]}>
      <Navbar />
      </div>
      <div presentacion-home>
      <Presentacion />
      </div>
      <div className={styles["about-home"]} id="about-me">
      <AboutMe/>
      </div>
      <div className={styles["contact-home"]} id="contact-me">
      <ContactMe/>
      </div>
      <div className={styles["technologies-home"]}>
      <Technologies/>
      </div>
      <div className={styles["projects-home"]}>
      <Projects />
      </div>
      <div className={styles["footer-home"]}>
      <Footer />
      </div>

    </div>
  );
};

export default Home;