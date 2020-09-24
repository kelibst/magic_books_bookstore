import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import { createStore } from 'redux';
import rootReducer from './reducers/index'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import initData from './initData';

const store = createStore(rootReducer, initData)
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
<<<<<<< HEAD
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
=======
  </React.StrictMode>,
  document.getElementById('root'),
>>>>>>> milestone1
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
