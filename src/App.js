import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router';
import Background from '../images/newestloog.png';
import Button from 'muicss/lib/react/button';

class App extends Component {

  render() {

    return (
        <div className="background">
          <Col xs={1}/>
            <Col xs={10} className="centeredContainer">
            <img src={ Background } alt="background" className="logoImage"/>
            <br/>
            <span className="peer">Peer</span>
            <span className="pulse">Pulse</span>
            <h3 id="tagline">A smarter way to share ideas</h3>
            <Link to="/home">
              <Button id="landing-button" variant="raised" color="accent">
                <span className="header">get started</span>
              </Button>
            </Link>
            </Col>
          <Col xs={1}/>
      </div>
    );
  }
}

export default App;
