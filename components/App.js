import React from 'react';
import { connect } from 'react-redux';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoInput dispatch={this.props.dispatch}/>
        <TodoList todos={this.props.todos} dispatch={this.props.dispatch}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);