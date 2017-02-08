import React, { Component } from 'react';
import Idea from './Idea';
import Title from './Title';
import Votes from './Votes';
import SimpleMenu from './SimpleMenu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { firebase } from '../utils/firebase';
import { Col } from 'react-bootstrap';
import Button from 'muicss/lib/react/button';
import { hashHistory } from 'react-router';

// defines state as empty arrays
class ClickedTopic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: [],
      idea: []
    }
  }
// once component mounts, update state of topics and idea
  componentDidMount(){
    var firebaseId = this.props.params.id;
    // console.log('KEY:', firebaseId);
    var ideaLocation = '/topics/' + firebaseId + '/idea';
    var topicLocation = '/topics/' + firebaseId;
    var voteLocation = '/topics/' + firebaseId + '/idea';
    let self=this;
    firebase.database().ref(topicLocation)
      .once("value", function(topicData) {


                var topicCollection = topicData.val();

                  self.setState({
                    topics: self.state.topics.concat(topicCollection)
                  });
                  // console.log('state of topics is', self.state.topics);
                });

      firebase.database().ref(ideaLocation)
      .once("value", function(data) {
                var ideaCollection = data.val();
                //  console.log('ideas are', ideaCollection);
                  self.setState({
                    idea: ideaCollection
                  });
                  // console.log('ideas are', self.state.idea);
                // }
          });
          // console.log('state of ideas is', self.state.idea);
        firebase.database().ref(voteLocation)
        .once("value", function(voteData) {
                  // console.log("VOTES: ", voteData.val());

                  var voteCollection = voteData.val();

                    self.setState({
                      votes: voteCollection
                    });
                    // console.log('state of vote is', self.state.votes);
                  // }
            });
      }

deleteEntry(e) {
  e.preventDefault();

  firebase.database()
    .ref('/topics/' + this.props.params.id)
    .remove().then(data => {
      // redirects you back to home
      hashHistory.push('/home');
    });
}

  render() {
// render each new state in a component
    const topics = this.state.topics.map(topic => {
      return <Title titleObject={ topic } />
    });
    const idea = this.state.idea.map(ideas => {
      return <Idea ideaObject={ ideas.idea } />
    });
    const votes = this.state.idea.map(ideas => {
      return <Votes ideaKey={ideas.key} topicKey={ this.props.params.id } voteObject={ ideas.votes } />
    });

    return (
      <div>
        <div>
          <MuiThemeProvider>
            <SimpleMenu />
          </MuiThemeProvider>
        </div>
        <Col xs={1}/>
        <Col xs={10} className="centeredContainer">
        <h1>{ topics }</h1>
        <div className="col-xs-12 ideasContainer">
          <div className="voteContainer">
            { votes }
          </div>
          <div className="ideaName">
            { idea }
          </div>
          <Button className="saveButton" onClick={ this.deleteEntry.bind(this) }>

            Delete
          </Button>
        </div>
      </Col>
        <Col xs={1}/>
        </div>
    );
  }
}

export default ClickedTopic;
