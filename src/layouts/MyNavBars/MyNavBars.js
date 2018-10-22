import React from "react";
import styles from "./MyNavBars.css";


const MyNavBars = () => (
    <div>
        <h1>Navbar Demos</h1>
        <header>

            {/* <ul style={ulStyle} > */}
            <ul className={styles.test} >
                <li className={styles.test2}>Home</li>
                <li className={styles.test2}>Store</li>
                <li className={styles.test2}>Contact</li>
                <li className={styles.test2}>Photos</li>
                <li className={styles.test2}>My Navbars</li>
                <li className={styles.navhelp} >Help</li>
            </ul>
        </header>
    </div>
);

export default MyNavBars;