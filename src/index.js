import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import dotenv from 'dotenv';

import DisplayTopics from './components/DisplayTopics';

import ClickedTopic from './components/ClickedTopic';


dotenv.config({ silent: true });

import App from './App';
import Home from './components/Home';
import AddTopic from './components/AddTopic';
import AddPublicTopic from './components/AddPublicTopic';
import PublicTopics from './components/PublicTopics';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App }/>
      <Route path="/home" component={ Home }/>
      <Route path="/add" component={ AddTopic }/>
      <Route path="/addpublic" component={ AddPublicTopic }/>
      <Route path="/mytopics" component={DisplayTopics} />
      <Route path="/ideas/:id" component={ClickedTopic}  />
      <Route path="/publictopics/:id" component={PublicTopics}  />


  </Router>,
  document.getElementById('root')
);
