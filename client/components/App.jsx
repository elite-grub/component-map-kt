import React from 'react';
import axios from 'axios';
import MapBox from './MapBox';
import MapText from './MapText';
import MapModal from './MapModal';
import { Border, Font } from './style.js';
import { config } from '../../server/database/config.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      getRandomInt: function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max) + 1);
      },
      toggleMap: 'none',
    };
    this.handleClick = this.handleClick.bind(this);
    this.closeClick = this.closeClick.bind(this);
  }

  componentDidMount() {
    this.getRestaurant();
  }

  getRestaurant() {
    axios.get(`${config.localhost}/restaurant/${this.props.id}`)
      .then((res) => {
        const restaurant = res.data[0];
        console.log('got data to CLient!!', restaurant);
        this.setState({ data: restaurant });
      })
      .catch(err => err);
  }

  handleClick() {
    this.setState(state => ({
      toggleMap: 'block',
    }));
    console.log('The link was clicked from APP!!!');
  }

  closeClick() {
    this.setState(state => ({
      toggleMap: 'none',
    }));
    console.log('Close Button clicked in Modal View');
  }

  render() {
    return (
      <Font>
        <Border className="container">
          <MapBox handleClick={this.handleClick} />
          <MapText data={this.state.data} handleClick={this.handleClick} />
          <MapModal toggleMap={this.state.toggleMap} closeClick={this.closeClick} />
        </Border>
      </Font>
    );
  }
}

export default App;
