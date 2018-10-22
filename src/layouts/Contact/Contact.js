import React, { Component } from "react";
import { motion, spring } from "react-motion";
import styles from "./Contact.css";

class Contact extends Component {
    state = {
        showPara: false
    }

    render() {
        return (
            <div className="container">
                <h1>Contact</h1>
                <form className={styles.contactform} action="/my-handling-form-page" method="post">
                    <legend>Personal information</legend>
                    <div className="row">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="user_name" />
                    </div>
                    <div className="row">
                        <label for="mail">E-mail:</label>   
                        <input type="mail" id="mail" name="user_mail" />
                    </div>
                    <div className="row">
                        <label for="msg">Message:</label>
                        <textarea id="msg" name="user_message"></textarea>
                    </div>
                    <div >
                        <input type="submit" value="Submit" onClick={this.handleFormSubmit} />
                    </div>

                </form>

            </div>
           
        );
    }

}

export default Contact; 