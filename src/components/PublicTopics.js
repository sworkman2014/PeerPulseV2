import React, { Component } from 'react';

import PublicTopic from './PublicTopic';
import { firebase } from '../utils/firebase';

class SearchedForTopics extends Component {

  constructor(props) {
    super(props);

    this.state = {
      topics: []
    }
  }

  componentDidMount() {
    let self=this;
    var topicsRef = firebase.database().ref("topics/");
    var topicUser = this.props.params.id;

      firebase.auth().onAuthStateChanged(function(userData){
              // console.log('user image', userData);
        topicsRef.orderByChild("userid").equalTo(topicUser).once("value", function(data) {
              // console.log("Public data is: ", data.val());

              var topicCollection = data.val();

              for(let key in topicCollection){
                topicCollection[key].uniqueKey = key;
                // console.log('key: ',topicCollection[key].uniqueKey);
                self.setState({
                  topics: self.state.topics.concat(topicCollection[key])
                });
              }
        });
      })
    }

  render() {
    const topics = this.state.topics.map(topic => {
      return <PublicTopic keyObject={ topic.uniqueKey } titleObject={ topic } />
    })

    return (
      <section id="topicsDiv" className="container-fluid">

        <div className="row">

        { topics }


        </div>
      </section>
    )
  }

}

export default SearchedForTopics
