import React from 'react';
import PropTypes from 'prop-types';
import {
  GetDirections, GetLocation, GetPhone, GetLink, GetCalendar, GetIphone, BlueLinks,
} from './style.js';

class MapText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {
      street, cityStateZip, phone, website,
    } = this.props.data;

    // const { } = this.props.handleClick;

    return (
      <div className="map-text">

        <GetLocation size="18" />
        <b>{street}</b>
        <br />
        <b>{cityStateZip}</b>
        <br />

        <BlueLinks>
          <GetDirections size="18" />
          <a onClick={this.props.handleClick}>Get Directions</a>
        </BlueLinks>

        <GetPhone size="18" />
        {phone}
        <br />

        <BlueLinks>
          <GetLink size="18" />
          {website}
        </BlueLinks>

        <BlueLinks>
          <GetCalendar size="18" />
            Make a Reservation
        </BlueLinks>

        <BlueLinks>
          <GetIphone size="18" />
            Send to your Phone
        </BlueLinks>

      </div>
    );
  }
}

export default MapText;
