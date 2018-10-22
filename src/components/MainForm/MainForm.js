import React, { Component } from "react";
import classes from "./MainForm.css";

class MainForm extends Component {
    // Setting our component's initial state
    state = {
        firstName: "",
        lastName: "",
        bio: ""
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("In handleFormSubmit", this.state.lastName);
        alert(this.state.bio);
    };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        console.log("Name/value" + name + " " + value);
        this.setState({
            [name]: value
        });
    }


    render() {
        return (
            <div> 
                <h1>My Main Form</h1>
                <hr className="style-two"></hr>
                <form className="shadow-border" >
                    <label>First Name: </label>
                    <input type="text" name="firstName" value={this.state.firstName} placeholder="First name (required)" onChange={this.handleInputChange} />
                    <br></br>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" value={this.state.lastName} placeholder="Last name (required)" onChange={this.handleInputChange}/>
                    <br></br>
                    <br></br>
                    <label>Note:</label>
                    
                    <textarea name="bio" value={this.state.bio} placeholder="Your Bio (optional)" onChange={this.handleInputChange}/>
                    <br></br>
                    <br></br>
                    <input type="submit" value="Submit" onClick={this.handleFormSubmit} />
                    
                </form>

                <div id="my-note">
                    <p>This is a note that I left for myself</p>
                </div>
            </div>
        )
    }

}

export default MainForm;
