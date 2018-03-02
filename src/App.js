import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  Switch,
} from 'react-router-dom'
import { inject } from 'mobx-react';
import Practice from './page/Practice';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Practice} />
        </Switch>

      </div>
    );
  }
}

export default App;
