import React from 'react';

class MapText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="map-text">
        <h1>Hello from MapText!</h1>
        <ul>
          <li>
            Pier 39
            <br />
            Ste A-202
            <br />
            San Francisco, CA 94133
            <br />
            Fisherman's Wharf, North
            <br />
            Beach/Telegraph Hill
          </li>
          <li>Get Directions</li>
          <li>(415) 421-2442</li>
          <li>fogharbor.com</li>
          <li>Make a Reservation</li>
          <li>Send to your Phone</li>
        </ul>
      </div>
    );
  }
}

export default MapText;
