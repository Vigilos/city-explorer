import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
  render() {
    // setTimeout(e => {
    //   console.log(this.props.weather)
    //   const dateTime = this.props.weather[0].timeStamp;
    // }, 100);
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="mb-2">Weather Forecast</Card.Title>
          {/* <Card.Subtitle className="mb-3">
            {this.dateTime}
          </Card.Subtitle> */}
          {this.props.weather.map((e, i) => {
            return (
              <WeatherDay
                key={i}
                date={e.date}
                description={e.description}
                timeStamp={e.timeStamp}
              />
            );
          })}
        </Card.Body>
      </Card>
    );
  }
}

export default Weather;
