import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Movie from './Movie';

class Movies extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="mb-2">Area Movies</Card.Title>
          {this.props.movies.map((e, i) => {
            return <Movie key={i} movie={e} />;
          })}
        </Card.Body>
      </Card>
    );
  }
}

export default Movies;
