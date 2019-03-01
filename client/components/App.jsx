import React from 'react';
import axios from 'axios';
import MapBox from './MapBox';
import MapText from './MapText';
import MapModal from './MapModal';
import { Border, Font } from './style.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      getRandomInt: function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max) + 1);
      },
      // btn.onclick = function() {
        //   modal.style.display = "block";
        // }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      toggleMapOn: !state.toggleMapOn,
    }));
    console.log('The link was clicked from APP!!!');
  }

  componentDidMount() {
    this.getRestaurant();
  }

  getRestaurant() {
    axios.get(`/restaurant/${this.state.getRandomInt(100)}`)
      .then((res) => {
        const restaurant = res.data[0];
        console.log('got data to CLient!!', restaurant);
        this.setState({ data: restaurant });
      })
      .catch(err => err);
  }

  render() {
    return (
      <Font>
        <Border className="container">
          <MapBox handleClick={this.handleClick} />
          <MapText data={this.state.data} handleClick={this.handleClick} />
          <MapModal />
        </Border>
      </Font>
    );
  }
}

export default App;
