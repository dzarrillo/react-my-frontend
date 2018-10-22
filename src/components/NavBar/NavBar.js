import React from "react";
// import classes from "./NavBar.css";
import styles from "./NavBar.css";

const NavBar = () => (
    <header>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/store">Store</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/photos">Photos</a></li>
            <li><a href="/mynavbars">My Navbars</a></li>
            <li><a href="/movies">Movies</a></li>
            <li className={styles.navhelp}><a href="/help">Help</a></li>
        </ul>
    </header>
);

export default NavBar;