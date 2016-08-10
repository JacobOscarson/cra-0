import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import once from 'lodash/once';

import {List, ListItem} from 'material-ui/List';

import AppBar from 'material-ui/AppBar';

import injectTapEventPlugin from 'react-tap-event-plugin';

const tapInitOnce = once(() => injectTapEventPlugin());

class App extends Component {
  render() {
    tapInitOnce();
    return (
      <List>
        <AppBar title="Quick proof-of-concept"/>
        <ListItem primaryText="Item 1" />
        <ListItem primaryText="Item 2" />
        <img src={logo} className="App-logo" alt="logo"/>
      </List>
    );
  }
}

export default App;
