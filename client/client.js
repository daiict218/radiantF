import React from 'react';
import { render } from 'react-dom';

import App from '../components/App';

import configureStore from '../redux/store';
import { Provider } from 'react-redux';
//Provider helps us connecting the components to the redux store

//configure and create our store
//var store = createStore(reducers, initialState) and pass in the app

let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'initial todo for demo'
  }]
};

let store = configureStore(initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);