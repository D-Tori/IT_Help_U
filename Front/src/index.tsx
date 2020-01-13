import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Theme from './utils/Theme';
import createSagaMiddleware from 'redux-saga'
import boardSaga from './modules/saga/board';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  trace: true
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(boardSaga);

ReactDOM.render(

  <Provider store={store}>
    <Theme>
      <App />
    </Theme>

  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
