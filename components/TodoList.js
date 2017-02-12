import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }

  renderList() {
    return this.props.todos.map(todo => {
      return (
        <TodoItem key={todo.id} todoItem={todo} dispatch={this.props.dispatch}/>
      );
    });
  };
}

export default TodoList;