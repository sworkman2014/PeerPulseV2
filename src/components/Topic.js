import React, { Component } from 'react';
import { Link } from 'react-router';

class Topic extends Component {

  render() {

    return (
      <div>
          <h4 className="topic-title"><Link to={"/Ideas/"+ this.props.keyObject}>{this.props.titleObject.title}</Link></h4>
      </div>
    );
  }
}

export default Topic;
