  import React, { Component } from 'react';
import { firebase } from '../utils/firebase';

class Votes extends Component {

  constructor(props) {
      super(props);

      this.state = {
        votes: this.props.voteObject,
        votedUp: [],
        votedDown: []
        // votedDown: []
      }
    }

  handleUpClick(e) {
    var ideaId = this.props.ideaKey
    var firebaseId = this.props.topicKey
    var ideaLocation = firebase.database().ref('/topics/' + firebaseId + '/idea/');
    var user = firebase.auth().currentUser.uid;
    let self=this;

// DB persist

    ideaLocation.orderByChild('key').equalTo(ideaId).once('value',(data)=>{
      // console.log('data is: ', data.val());
      for(let ideaKey in data.val()){
        var ideaRef = firebase.database().ref('/topics/' + firebaseId + '/idea/'+ideaKey);
        var ideaValue = data.val()[ideaKey];
        var hasVotedUp = ideaValue.votedUp || [];

        if(hasVotedUp.indexOf(user) === -1){
          console.log('in conditional')

          self.setState({
            votes: ++self.state.votes,
            votedUp: hasVotedUp.concat(user)
          });

          ideaRef.update({
            votes: self.state.votes,
            votedUp: hasVotedUp.concat(user)
          })
        }
      }
    });
    }

    handleDownClick(e) {
      var ideaId = this.props.ideaKey
      var firebaseId = this.props.topicKey
      var ideaLocation = firebase.database().ref('/topics/' + firebaseId + '/idea/');
      var user = firebase.auth().currentUser.uid;
      let self=this;

  // DB persist

      ideaLocation.orderByChild('key').equalTo(ideaId).once('value',(data)=>{
        // console.log('data is: ', data.val());
        for(let ideaKey in data.val()){
          var ideaRef = firebase.database().ref('/topics/' + firebaseId + '/idea/'+ideaKey);
          var ideaValue = data.val()[ideaKey];
          var hasVotedDown = ideaValue.votedDown || [];

          if(hasVotedDown.indexOf(user) === -1){
            console.log('in conditional')

            self.setState({
              votes: --self.state.votes,
              votedDown: hasVotedDown.concat(user)
            });

            ideaRef.update({
              votes: self.state.votes,
              votedDown: hasVotedDown.concat(user)
            })
          }
        }
      });
      }
    render() {
      // I want to get the topic with id of: this.props.params.id

      return (

        <div className='voteContainer'>
        <p className="upVoteIcon" onClick={ this.handleUpClick.bind(this)}>▲</p>
         <h1 className="upVoteText" >{this.state.votes}</h1>
         <p className="downVoteIcon" onClick={ this.handleDownClick.bind(this)}>▼</p>
        </div>
    )
  }
}

export default Votes;
