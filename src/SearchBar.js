import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import DisplayResults from './DisplayResults';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverUrl: 'https://city-explorador.herokuapp.com',
      // serverUrl: 'http://localhost:3001',
      searchText: '',
      searchLocation: {},
      map: '',
      errorOccur: [false, ''],
      setShow: false,
      weather: [],
      movies: [],
    };
  }

  doSearch = async () => {
    try {
      // Set API for city search
      let api = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchText}&format=json`;
      const searchResponse = await axios.get(api);
      this.setState({ searchLocation: searchResponse.data[0] });

      // Delay to ensure searchLocation state is set
      setTimeout(e => {
        // Retrieve map for selected city
        this.setState({
          map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.searchLocation.lat},${this.state.searchLocation.lon}&zoom=10`,
        });
        this.weatherSearch();
        this.movieSearch();
      }, 0);

      this.setState({ setShow: false });
    } catch (error) {
      this.setState({
        errorOccur: [true, `CODE: ${error.code} - MSG: ${error.message}`],
      });
      this.setState({ setShow: true });
    }
  };

  weatherSearch = async () => {
    // set API for and retrieve weather
    const api = `${this.state.serverUrl}/weather?searchQuery=${this.state.searchText}&lat=${this.state.searchLocation.lat}&lon=${this.state.searchLocation.lon}`;
    const weatherResponse = await axios.get(api);
    this.setState({ weather: weatherResponse.data });
  };

  movieSearch = async () => {
    // set API for and retrieve movies
    const api = `${this.state.serverUrl}/movies?searchQuery=${this.state.searchText}`;
    const moviesResponse = await axios.get(api);
    this.setState({ movies: moviesResponse.data });
  };

  render() {
    return (
      <>
        <div id="form">
          <Form>
            <Container className="ms-3 p-2">
              <Row>
                <Col xs={6} md={4}>
                  <Form.Group className="mb-3 d-inline">
                    <Form.Control
                      type="text"
                      placeholder="Search for a city"
                      onChange={e =>
                        this.setState({ searchText: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={8} className="">
                  <Button variant="secondary" size="md" onClick={this.doSearch}>
                    Explore!
                  </Button>
                </Col>
              </Row>
            </Container>
          </Form>
        </div>

        {
          <Alert className="mb-0" show={this.state.setShow} variant="danger">
            <Alert.Heading>An error has occurred!</Alert.Heading>
            <p>{this.state.errorOccur[1]}</p>
          </Alert>
        }
        {this.state.searchLocation.display_name && (
          <>
            <DisplayResults
              searchLocation={this.state.searchLocation}
              map={this.state.map}
              weather={this.state.weather}
              movies={this.state.movies}
            />
          </>
        )}
      </>
    );
  }
}

export default SearchBar;
