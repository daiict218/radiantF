import React from 'react';
import { connect } from 'react-redux';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);