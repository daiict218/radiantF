import React from 'react';

import actions from '../redux/actions';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: ''
    };
  };

  render() {
    return (
      <div>
        <input
          placeholder={'Enter a todo'}
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.handleSubmit.bind(this)}>{'Submit'}</button>
      </div>
    );
  };

  //Todo: check why es6 syntax isn't working
  handleChange(event) {
    this.setState({
      inputText: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.dispatch(actions.addTodo(this.state.inputText));
  }
}

export default TodoInput;