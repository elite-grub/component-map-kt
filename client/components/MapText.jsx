import React from 'react';
import PropTypes from 'prop-types';
import {
  GetDirections, GetLocation, GetPhone, GetLink, GetCalendar, GetIphone, BlueLinks,
} from './style.js';

class MapText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn,
  //   }));
  //   console.log('The link was clicked from Get Directions.');
  // }

  /*
on map click
OR
"Get Directions" click
  event handler opens MapModal
*/

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

        {/* click sends to map modal */}

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

// MapText.propTypes = {
//   props.data: PropTypes.object,
// };

export default MapText;
