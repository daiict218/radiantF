import { createStore } from 'redux';
import reducer from './reducer';

//add middlewares here

export default function configureStore(initialState = {todos: []}) {
  return createStore(reducer, initialState);
};