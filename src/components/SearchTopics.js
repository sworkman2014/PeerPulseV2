import React, { Component } from 'react';
import Button from 'muicss/lib/react/button';
import { Link } from 'react-router';
import PublicTopics from './PublicTopics';

class SearchTopics extends Component {
  constructor(props){
  super(props);

  this.state = {
    searchText: ""
  }
}

searchTopics(event){
  this.setState({
    searchText: event.target.value
  })

  console.log('searched text is', this.state.searchText)
}

  render() {
    return (
      <div>

      <input id="search-text-box" type="text" name="search" onKeyUp={this.searchTopics.bind(this)} placeholder="Search topics by user ID"/>

      <Link to={"/publictopics/"+ this.state.searchText}>
        <Button className="savedButton">
            <form>
                <input style={{color: 'white'}}
                  type="submit"
                  value="Search"
                />
            </form>
        </Button>
      </Link>
      <PublicTopics/>
    </div>
    )
  }
}

export default SearchTopics;
