import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DisplayResults.css';
import Image from 'react-bootstrap/Image';

class DisplayResults extends React.Component {
  render() {
    return (
      <div id="results">
        <div id="city-result">
          <h2>City Found: {this.props.searchLocation.display_name}</h2>
          <h2>
            Latitude: {this.props.searchLocation.lat}, Longitude:{' '}
            {this.props.searchLocation.lon}
          </h2>
        </div>
        <div id="map">
          <Image className="img-fluid border" src={this.props.map} rounded />
        </div>
      </div>
    );
  }
}

export default DisplayResults;
