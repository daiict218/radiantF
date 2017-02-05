import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }

  renderList() {
    return this.props.todos.map(function (todo) {
      return <li key={todo.id}>{todo.text}</li>;
    });
  };
}

export default TodoList;