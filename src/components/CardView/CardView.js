import React from "react";
import styles from "./CardView.css";

const CardView = (props) => (
    <div className={styles.cardview}>
        <img src={props.imageUrl} alt="Photo" ></img>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.releasedate}>{props.releaseDate}</p>
    </div>
    
);
export default CardView;