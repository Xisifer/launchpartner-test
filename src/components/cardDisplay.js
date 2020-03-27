import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from "axios";



class CardDisplay extends Component {
    state = {
        profiles:[]
    };


    render() {
      return (
        <React.Fragment>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    {/* In order to get this data, this needs to be passed down from state. Which means the parent component (App.js?) needs to hand off the data. */}
                    <Card.Title>this.state.profiles.name</Card.Title>
                    <Card.Text>
                    this.state.profiles.description
                    </Card.Text>
                </Card.Body>
            </Card>
        </React.Fragment>
      );
    }
  }
  
  export default CardDisplay;
  