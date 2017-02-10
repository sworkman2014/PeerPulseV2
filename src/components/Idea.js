import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class Idea extends Component {
  render() {

    return (
      <div id="topicsDiv">

      <Col xs={9} className="ideaName">
          <div className="idea-title-header"><h4 id="ideas">{this.props.ideaObject}</h4></div>
    </Col>

    </div>
    );
  }
}

export default Idea;
