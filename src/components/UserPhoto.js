import React, { Component } from 'react';
import { firebase } from '../utils/firebase';

class UserPhoto extends Component {
  constructor(props){
    super(props);

    this.state={
      imgurl: ''
    }
  }

  componentDidMount() {

      firebase.auth().onAuthStateChanged((userData)=>{

              console.log('user image', userData.photoURL);
              this.setState({
                imgurl: userData.photoURL
              })

      })
      console.log('state is: ', this.state.imgurl)
    }


  render(){
    return(
      <div id="userPhoto">
        <img className="userPhoto img-circle" src={ this.state.imgurl } alt="user"/>
      </div>
    )
  }
}

export default UserPhoto;
