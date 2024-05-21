import React from "react";
import styles from "./Footer.module.css"



const Footer = () => {

    return (
        <div className={styles["container-footer"]}>
            <p className={styles["primer-p"]}>📧 Mail</p> <p className={styles["segundo-p"]}> diame.cjs@gmail.com</p>
            <p className={styles["primer-p"]}>📱 Telefono</p> <p  className={styles["segundo-p"]}> 🇨🇴 +57 321 586 46 22  - 🇺🇾 +598 96 218 481</p>
            <p className={styles["primer-p"]}>📍 Ubicación </p><p  className={styles["segundo-p"]}> Piriápolis - Uruguay</p>

        </div>
    );
};

export default Footer;
