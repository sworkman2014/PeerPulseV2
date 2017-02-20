import React, { Component } from 'react';
import LoginButton from './LoginButton';
import FBLoginButton from './FBLoginButton';
import SearchTopics from './SearchTopics';
import { Col } from 'react-bootstrap';
import {firebase} from '../utils/firebase';
import { Link } from 'react-router';
import Topics from './Topics';
import SimpleMenu from './SimpleMenu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserPhoto from './UserPhoto';
import { StickyContainer, Sticky } from 'react-sticky';

import { Scrollbars } from 'react-custom-scrollbars';
import Button from 'muicss/lib/react/button';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    }
  }
//lifecycle method: if user is logged in, show user object, if not show empty object
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('Logged in:', user);
        this.setState({ user });
      } else {
        this.setState({ user: {} });
      }
    });
  }
//if someone is not logged in, show login..if not show logout button and name of person,
  sessionButton() {
    if (!firebase.auth().currentUser) {
      return <LoginButton id="login-button">Log in with GitHub</LoginButton>;
    }
  }

  loggedIn(){
    const welcomeMessage = (firebase.auth().currentUser) ?
       `Hi ${this.state.user.displayName}!` :
      '';
    if (firebase.auth().currentUser){
      return<div>
      <div>

      <MuiThemeProvider>
        <SimpleMenu />
      </MuiThemeProvider>

      </div>
      <Col xs={1}/>
      <Col xs={10} className="centeredContainer">

      <div>
        { this.sessionButton() }
        <h3 className="header">{ welcomeMessage }</h3>
        <UserPhoto id="userPhoto" />
        <br/>
      </div>
<h3 id="noMargin">YOUR TOPICS:</h3>
      <Scrollbars className="scrollbars"
      style={{ height: 200 }}>
      <div className="topicsDiv"><Topics /></div>
      </Scrollbars>

    </Col>
      <Link to="/add">
      <Button className="addingButton" variant="raised">
        <h2 className="header">add topic</h2>
      </Button>
    </Link>


      <Col xs={1}/>

    </div>;

    } else {
      return<div>
        <Col xs={1}/>
        <Col xs={10}>
          <div id="center">
        <LoginButton id="login-button">
          <h2 className="header">GitHub Login</h2>
        </LoginButton>
        <FBLoginButton>
          <h2 className="header">Facebook Login</h2>
        </FBLoginButton>
          </div>
      </Col>
      <Col xs={1}/>
</div>
    }

    }

  render() {


    return (
      <div>
      { this.loggedIn() }
</div>
    );
  }
}

export default Home;


      // <SearchTopics id="search"/>
