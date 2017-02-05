import React from 'react';

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
        <button>{'Submit'}</button>
      </div>
    );
  };

  //Todo: check why es6 syntax isn't working
  handleChange(event) {
    this.setState({
      inputText: event.target.value
    });
  }
}

export default TodoInput;