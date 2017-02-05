import React from 'react';

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

export default App;