import React, { Component } from 'react';
import './App.less';
import {
  Route,
  Switch,
} from 'react-router-dom'
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
