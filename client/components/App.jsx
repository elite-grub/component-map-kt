import React from 'react';
import axios from 'axios';
import MapBox from './MapBox';
import MapText from './MapText';
import { Border, Font } from './style.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      getRandomInt: function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max) + 1);
      },
    };
  }

  componentDidMount() {
    this.getRestaurant();
  }

  // function getRandomInt(max) {
  //   return Math.floor(Math.random() * Math.floor(max) + 1);
  // }


  getRestaurant() {
    axios.get(`/restaurant/${this.state.getRandomInt(100)}`)
      .then((res) => {
        // console.log()
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
          <MapBox />
          <MapText data={this.state.data} />
        </Border>
      </Font>
    );
  }
}

export default App;
