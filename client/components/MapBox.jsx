import React from 'react';

class MapBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMapOn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      toggleMapOn: !state.toggleMapOn,
    }));
    console.log('The link was clicked from Map.');
  }

  render() {
    return (
      <div>
        <a onClick={this.handleClick}>
        <img src="https://s3-us-west-1.amazonaws.com/placeholders-kt/mapSample.png" alt="Map Placeholder" height="135" width="286" />
        </a>
      </div>
    );
  }
}

export default MapBox;
