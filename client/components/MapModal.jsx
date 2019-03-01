import React from 'react';
import { ModalStyle } from './style.js';

class MapModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // btn.onclick = function() {
        //   modal.style.display = "block";
        // }
    };
  }

  /*
on map click
OR
"Get Directions" click
  event handler opens MapModal
*/
  render() {
    // const {
    //   street, cityStateZip, phone, website,
    // } = this.props.data;

    return (

      // <!-- The Modal -->
      <ModalStyle>
        <div id="myModal" className="modal">

        <span className="close">Close &times;</span>
        {/* <!-- Modal content --> */}
        <div className="modal-content">
          <img src="https://s3-us-west-1.amazonaws.com/placeholders-kt/mapModal.png" alt="Map Placeholder" height="100%" width="100%" />
        </div>
        </div>
      </ModalStyle>
    );
  }
}


/* Modal Content */
// .modal-content {

// }

// /* The Close Button */
// .close {
//   color: #aaaaaa;

//   font-size: 15px;
//   font-weight: normal;
//   padding: .05px;

// }

// .close:hover,
// .close:focus {
//   color: white;
//   text-decoration: none;
//   cursor: pointer;
// }

// // <!-- Trigger/Open The Modal -->
// <button id="myBtn">Get Directions</button>


// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

export default MapModal;
