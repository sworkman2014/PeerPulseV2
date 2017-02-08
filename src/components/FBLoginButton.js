import React, { Component } from 'react';

import { firebase } from '../utils/firebase';
import Button from 'muicss/lib/react/button';
import { Col } from 'react-bootstrap';
class FBLoginButton extends Component {
  handleClick(e) {
    e.preventDefault();
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function(result){
      console.log('result', result);
    });
  }

  render() {
    return (
      <div>
      <Col xs={2}/>
      <Col xs={10}>
        <br/>
        <br/>
      <Button onClick={ this.handleClick.bind(this) }
        id="loginButton" className="landingButton centeredContainer">{ this.props.children }</Button>
      </Col>
    </div>
    )
  }
}

export default FBLoginButton;
