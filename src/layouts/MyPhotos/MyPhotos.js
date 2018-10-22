import React from "react";
import classes from "./MyPhotos.css";

const MyPhoto = () => (
    <div>
        <h1>My Photos</h1>
        <div className="photo-cardview">
            <div className="my-image">
                <img src={require("../../assets/images/nordwood.jpg")} alt="Photo" ></img>
                <p className="photo-loc">Princeton, NJ</p>
                <p className="photo-descr">My office is a ten story building</p>

            </div>
        </div>
    </div>
);
export default MyPhoto;