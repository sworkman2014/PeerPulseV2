import React, { Component } from 'react';

class Title extends Component {



  render() {

    return (
      <div>
          <h4 className="topic-title-header">{this.props.titleObject.title}</h4>
      </div>
    );
  }
}

export default Title;
