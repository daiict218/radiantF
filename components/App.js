import React from 'react';

import TextInput from './TextInput';

class App extends React.Component {
  render() {
    return (
      <div>
        <TextInput />
        {'hello world'}
      </div>
    );
  }
}

export default App;