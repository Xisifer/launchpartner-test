import React, {Component} from 'react';
// import logo from './logo.svg';

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
        <div className="App">
        <input type="file" />
        <p>Hello, world</p>
        <button onClick={this.uploadFile}>Upload</button>
        </div>
    );
  }
}

export default ImageUpload;


