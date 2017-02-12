import React from 'react';
import actions from '../redux/actions';

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <div>{this.props.todoItem.text}</div>
        <button onClick={this.onComplete}>{'Mark as completed'}</button>
        <button onClick={this.onDelete}>{'Delete'}</button>
      </li>
    );
  };

  onComplete = () => {
    this.props.dispatch(actions.completeTodo(this.props.todoItem.id));
  };

  onDelete = () => {
    this.props.dispatch(actions.deleteTodo(this.props.todoItem.id));
  };
}

export default TodoItem;