import React, { Component } from 'react';
import './App.less';
import {
  Route,
  Switch,
} from 'react-router-dom'
import Practice from './page/Practice';
import Tools from './component/tools/Tools';

class App extends Component {
  render() {
    return (
      <div>
        <Tools />
        <Switch >
          <Route path="/" component={Practice} />
        </Switch>
      </div>
    );
  }
}

export default App;
