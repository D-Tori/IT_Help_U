import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Theme from './utils/Theme';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

ReactDOM.render(

  <Provider store={store}>
    <Theme>
      <App />
    </Theme>

  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
