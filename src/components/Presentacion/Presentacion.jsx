import React from "react";
import styles from "./Presentacion.module.css"



const Presentacion = () => {

    return (
        <div className={styles["container-presentacion"]}>

            <div className={styles["imagen-presentacion"]}>
                <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1681963452/diame-removebg-preview_2_lqgqpd.png" alt="Profile" />
            </div>
            <div className={styles["texto-presentacion"]}>
                <h2 className={styles["h2-presentacion"]}>Hola! Soy</h2>
                <h1 className={styles["h1-presentacion"]}>Diamela Lares...</h1>
                <h3 className={styles["h3-presentacion"]}>Y SOY FULL STACK DEVELOPER! </h3>
            </div>

        </div>
    );
};

export default Presentacion;