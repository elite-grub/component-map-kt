import React from 'react';

class MapBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <img src="https://s3-us-west-1.amazonaws.com/placeholders-kt/mapSample.png" alt="Map Placeholder" height="135" width="286" />
      </div>
    );
  }
}

export default MapBox;
