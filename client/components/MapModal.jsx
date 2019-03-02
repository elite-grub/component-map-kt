import React from 'react';
import { ModalStyle, CloseStyle } from './style.js';

class MapModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (

      <ModalStyle style={{ display: this.props.toggleMap }}>
        <div id="myModal" className="modal">

          <CloseStyle className="close">
            <a onClick={this.props.closeClick}>
              Close &times;
            </a>
          </CloseStyle>
          <div className="modal-content">
            <img src="https://s3-us-west-1.amazonaws.com/placeholders-kt/mapModal.png" alt="Map Placeholder" height="100%" width="100%" />
          </div>
        </div>
      </ModalStyle>
    );
  }
}

export default MapModal;
