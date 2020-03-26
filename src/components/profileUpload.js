import React, {Component} from 'react';
import {Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

class ProfileUpload extends Component {

    constructor(props) {
        super(props);
        this.state={
            image:"",
            name:"",
            description:""
        }
    }

    fileHandler = event =>  {
        console.log("The image is being processed...");
        // Here we store our image into State
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploader = () => {
        axios.post()
            .then(response => {
                console.log(response);
            })
    }


    uploadAll() {
        console.log("Uploading profile...");
        
        var userText = document.getElementById("#textArea").val;
        // console.log(userText);
        // let userPic = "haha";





    }
    




  render() {
    return (
        // <div className="App">
        // <input type="file" />
        // <p>Hello, world</p>
        
        // </div>
        <Form id="profile-submission">
            <Form.Label>Upload a portrait here:</Form.Label>
            {/* For some reason, the filename is not displayed in the box after being selected. Weird. Result of using react-bootstrap instead of a full custom solution?*/}
            {/* <Form.File 
                id="custom-file"
                label="Portrait"
                custom
            /> */}

            <input type="file" onChange={this.fileHandler} />

            <button type="button" onClick={this.fileUploader}>Upload File</button>

            {/* <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
            <Form.Group controlId="exampleForm.ControlTextArea1">
                <Form.Label>Tell us about yourself!</Form.Label>
                <Form.Control id="textArea" rows="3" />
            </Form.Group>
            <button type="button" onClick={this.uploadAll}>Upload Profile</button> */}
        </Form>
    );
  }
}

export default ProfileUpload;


