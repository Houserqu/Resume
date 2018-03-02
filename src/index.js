import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import ResumeStore from './store/ResumeStore';
let stores = {
  ResumeStore,
};

ReactDOM.render((
  <Provider {...stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
),document.getElementById('root'));
registerServiceWorker();
