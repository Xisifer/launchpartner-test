import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileUpload from "./components/profileUpload.js"
import CardDisplay from "./components/cardDisplay.js"

class App extends Component {

  componentWillMount() {
    // Ideally, here we should make an Axios call, and grab the user data from the database. Probably using sequelize.

    // Concentrate on the Name and Description before the Image.
    // I need to BUILD the API.
    // Port on the machine, and there's a URL that's available on ht eWWW.

    // Look up a toturial on how to create a simple Heroku server.

    // Handle the VIEW, UPDATE and SAVE first.
    // Don't worry about Viewing All Profiles.

    // Set a timer for 30min, back out of that tunnel and do other stuff instead, come back later.  


  }

  render() {
    return (
      <div>
        <ProfileUpload />
        <CardDisplay />
      </div>
    );
  }
}

export default App;
