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
    <div>
      <Navbar />
      <Presentacion />
      <div id="about-me">
      <AboutMe/>
      </div>
      <div id="contact-me">
      <ContactMe/>
      </div>
      <h1 className={styles["h1-home"]}>Tecnologías</h1>
      <Technologies/>
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;