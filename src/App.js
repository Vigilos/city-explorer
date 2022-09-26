import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchBar from './SearchBar';

class App extends React.Component {
  render() {
    return (
      <div id="main">
        <SearchBar />
      </div>
    );
  }
}

export default App;
