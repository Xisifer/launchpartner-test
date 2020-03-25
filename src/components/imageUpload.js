import React, {Component} from 'react';
import {Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class ImageUpload extends Component {

    constructor(props) {
        super(props);
        this.state={
            image:""
        }
    }


  uploadFile() {

  }


  render() {
    return (
        // <div className="App">
        // <input type="file" />
        // <p>Hello, world</p>
        
        // </div>
        <Form id="profile-submission">
            <Form.Label>Upload a portrait here:</Form.Label>
            <Form.File 
                id="custom-file"
                label="Custom file input"
                custom
            />
            <br />
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Tell us about yourself!</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <button onClick={this.uploadDesc}>Upload Profile</button>
        </Form>
    );
  }
}

export default ImageUpload;


