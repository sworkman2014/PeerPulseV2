import React, { Component } from 'react';
import { Link } from 'react-router';

class PublicTopic extends Component {



  render() {

    return (
      <div id="topicsDiv" className="col-sm-6 col-md-6 col-lg-12">
          <h4 className="topic-title"><Link to={"/Ideas/"+ this.props.keyObject}>{this.props.titleObject.title}</Link></h4>
      </div>
    );
  }
}

export default PublicTopic;
