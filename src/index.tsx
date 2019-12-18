import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import rootReducer from './modules';
import { createStore } from 'redux';

const store = createStore(rootReducer);



ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'));

serviceWorker.unregister();
