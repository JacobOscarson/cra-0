import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import once from 'lodash/once';

import {List, ListItem} from 'material-ui/List';

import AppBar from 'material-ui/AppBar';

import myTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';

const tapInitOnce = once(() => injectTapEventPlugin());

class App extends Component {
  render() {
    tapInitOnce();
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
        <List>
          <AppBar title="Quick proof-of-concept"/>
          <ListItem primaryText="Item 1" />
          <ListItem primaryText="Item 2" />
          <img src={logo} className="App-logo" alt="logo"/>
        </List>
      </MuiThemeProvider>
    );
  }
}

export default App;
