import React from "react";
import styles from "./Projects.module.css"

const Projects = () => {

    return (
        <div className={styles["principal-projects"]}>
            <div className={styles["container-projects"]}>
                <h1 className={styles["h1-projects"]}>Proyectos</h1>
            </div>
            <div className={styles["cohete-projects"]}>
                <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1682105094/Cohete_ztsddr.gif" alt="cohete" />
            </div>
            <div className={styles["cards-projects"]}>
                <div className={styles["cards-1"]}>
                    <div className={styles["card-front"]}>
                        <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677876777/Sin_t%C3%ADtulo_gqtddm.png" alt="Donde suena"/>
                    </div>
                    <div className={styles["card-back"]}>
                        <h1>Donde Suena? - Henry Projects</h1>
                        <p> Donde Suena es un proyecto grupal donde utilizamos todos los conocimientos adquiridos en el bootcamp Soy Henry, es una aplicacion web para adquirir tickets a eventos musicales, y adicionalmente tiene un sector social donde bandas under pueden postear y compartir info y shows con sus seguidores.
                        </p>
                        <div className={styles["card-back-imgcontainer"]}>
                            <a href="https://github.com/aouriarte/DondeSuena" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/889/889192.png?w=740&t=st=1682110284~exp=1682110884~hmac=0e9ccae0138bb6c2746e38460025f76c092e94e35800da925da88cdff386d9b4" alt="" width={65} height={65} className={styles["card-back-img"]} />
                            </a>
                            <a href="https://dondesuena-front.vercel.app/" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/1201/1201519.png?w=740&t=st=1682110410~exp=1682111010~hmac=cbe0fa9c9ba50c02d24dcaa2f4084aeadb2a6414005ef3c0452d5314a8012dd4" alt="" width={50} height={50} className={styles["card-back-img"]} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles["cards-2"]}>
                    <div className={styles["card-front"]}>
                        <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677876778/Dise%C3%B1o_sin_t%C3%ADtulo_19_jdrxfe.png" alt="Ecomerce"/>
                    </div>
                    <div className={styles["card-back"]}>
                        <h1>Ecommerce Ferreteria</h1>
                        <p>Cpj Ferreteria es un eccomerce básico para una ferretería, donde se pueden visualizar productos separados por categorias.
                            Adicionalmente como admin de la pagina se puede agregar y eliminar productos en el sitio.
                        </p>
                        <div className={styles["card-back-imgcontainer"]}>
                            <a href="https://github.com/diamecjs/CPJ--Back" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/889/889192.png?w=740&t=st=1682110284~exp=1682110884~hmac=0e9ccae0138bb6c2746e38460025f76c092e94e35800da925da88cdff386d9b4" alt="" width={65} height={65} className={styles["card-back-img"]} />
                            </a>
                            <a href="https://cpjferreteria.vercel.app/" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/1201/1201519.png?w=740&t=st=1682110410~exp=1682111010~hmac=cbe0fa9c9ba50c02d24dcaa2f4084aeadb2a6414005ef3c0452d5314a8012dd4" alt="" width={50} height={50} className={styles["card-back-img"]} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles["cards-3"]}>
                    <div className={styles["card-front"]}>
                        <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677876777/Dise%C3%B1o_sin_t%C3%ADtulo_18_fwu3aw.png" alt="Pi-videogames"/>
                    </div>
                    <div className={styles["card-back"]}>
                        <h1>Videogames Projects - Soy Henry</h1>
                        <p>Game world es un proyecto individual realizado para el bootcamp de Soy Henry, donde puse a prueba los conocimientos adquiridos en el mismo, haciendo utilidad de API REST</p>
                        <div className={styles["card-back-imgcontainer"]}>
                            <a href="https://github.com/diamecjs/Pi-Videogames" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/889/889192.png?w=740&t=st=1682110284~exp=1682110884~hmac=0e9ccae0138bb6c2746e38460025f76c092e94e35800da925da88cdff386d9b4" alt="" width={65} height={65} className={styles["card-back-img"]} />
                            </a>
                            <a href="https://pi-videogames-pearl-seven.vercel.app/" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/1201/1201519.png?w=740&t=st=1682110410~exp=1682111010~hmac=cbe0fa9c9ba50c02d24dcaa2f4084aeadb2a6414005ef3c0452d5314a8012dd4" alt="" width={50} height={50} className={styles["card-back-img"]} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles["cards-3"]}>
                    <div className={styles["card-front"]}>
                        <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1683661592/233788062-1303704b-153b-4954-b9c6-de77433a177a_pxbkri.png" alt="Portamor"/>
                    </div>
                    <div className={styles["card-back"]}>
                        <h1>Proyecto Portamor</h1>
                        <p>Este es un proyecto realizado para la ONG Portamor-Pe de adultos mayores, la idea de este proyecto fue poder acercar a los adultos mayores a una plataforma para poder acceder a cursos online desde la comodidad de sus casas</p>
                        <div className={styles["card-back-imgcontainer"]}>
                            <a href="https://github.com/portamor/curso" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/889/889192.png?w=740&t=st=1682110284~exp=1682110884~hmac=0e9ccae0138bb6c2746e38460025f76c092e94e35800da925da88cdff386d9b4" alt="" width={65} height={65} className={styles["card-back-img"]} />
                            </a>
                            <a href="" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/1201/1201519.png?w=740&t=st=1682110410~exp=1682111010~hmac=cbe0fa9c9ba50c02d24dcaa2f4084aeadb2a6414005ef3c0452d5314a8012dd4" alt="" width={50} height={50} className={styles["card-back-img"]} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles["cards-3"]}>
                    <div className={styles["card-front"]}>
                        <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1683661960/mar_y_arte_web_md1osn.png" alt="Mar y Arte"/>
                    </div>
                    <div className={styles["card-back"]}>
                        <h1>Mar y Arte</h1>
                        <p>Mar y Arte es un proyecto personal para un emprendimiento propio, la pagina web es totalmente responsive, tiene un login para administrador que da acceso a agregar, editar y eliminar productos. Ademas como cliente tambien se puede hacer uso de un carrito de compras para mas comodidad.</p>
                        <div className={styles["card-back-imgcontainer"]}>
                            <a href="https://github.com/diamecjs/maryarte" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/889/889192.png?w=740&t=st=1682110284~exp=1682110884~hmac=0e9ccae0138bb6c2746e38460025f76c092e94e35800da925da88cdff386d9b4" alt="" width={65} height={65} className={styles["card-back-img"]} />
                            </a>
                            <a href="https://maryarte.vercel.app/" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/1201/1201519.png?w=740&t=st=1682110410~exp=1682111010~hmac=cbe0fa9c9ba50c02d24dcaa2f4084aeadb2a6414005ef3c0452d5314a8012dd4" alt="" width={50} height={50} className={styles["card-back-img"]} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;