import React from 'react';
import Container from './Container';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>Hello from App!</h1>
        <Container />
      </div>
    );
  }
}

export default App;
