import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchLocation: {},
    };
  }

  doSearch = async () => {
    const api = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchText}&format=json`;
    const searchResponse = await axios.get(api);
    this.setState({ searchLocation: searchResponse.data[0] });
    console.log(searchResponse.data[0]);
  };

  render() {
    return (
      <>
        <input
          onChange={e => this.setState({ searchText: e.target.value })}
          placeholder="search for a city"
        ></input>
        <button onClick={this.doSearch}>Explore!</button>
        {this.state.searchLocation.display_name && (
          <div>
            <h2>Found the City: {this.state.searchLocation.display_name}</h2>
            <h2>Latitude: {this.state.searchLocation.lat}</h2>
            <h2>Longitude: {this.state.searchLocation.lon}</h2>
          </div>
        )}
      </>
    );
  }
}

export default SearchBar;
