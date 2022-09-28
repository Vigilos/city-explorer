import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DisplayResults.css';
import Image from 'react-bootstrap/Image';
import Weather from './Weather';
import Card from 'react-bootstrap/Card';

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
        <div id="weather-map">
          <div id="weather">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Subtitle className="mb-2">Weather Forecast</Card.Subtitle>
                {this.props.weather.map((e, i) => {
                  return (
                    <Weather
                      key={i}
                      date={e.date}
                      description={e.description}
                    />
                  );
                })}
              </Card.Body>
            </Card>
          </div>
          <div id="map">
            <Image className="img-fluid" src={this.props.map} rounded />
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayResults;
