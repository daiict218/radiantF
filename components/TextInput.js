import React from 'react';

import TextDisplay from './TextDisplay';

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: ''
    };
  }

  render() {
    return (
      <div>
        <input
          placeholder="enter a todo"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <TextDisplay text={this.state.inputText}/>
      </div>
    );
  }

  //Todo: check why es6 syntax isn't working
  handleChange(event) {
    this.setState({
      inputText: event.target.value
    });
  }
}

export default TextInput;