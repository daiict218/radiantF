import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//add middlewares here for everytime the action is fired

let finalCreateStore = compose(
  applyMiddleware(thunk, logger())
)(createStore);

export default function configureStore(initialState = {todos: []}) {
  return finalCreateStore(reducer, initialState);
};