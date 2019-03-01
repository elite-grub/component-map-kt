import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import {Directions} from 'styled-icons/material/Directions';
import {
  GetDirections, GetLocation, GetPhone, GetLink, GetCalendar, GetIphone, BlueLinks,
} from './style.js';


// const App = () => <RedZap />

class MapText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {
      name, street, cityStateZip, phone, website,
    } = this.props.data;

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
          Get Directions
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
