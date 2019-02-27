import React from 'react';
import MapBox from './MapBox';
import MapText from './MapText';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>Hello from Container!</h1>
        <MapBox />
        <MapText />
      </div>
    );
  }
}

export default Container;
