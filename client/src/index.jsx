import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import $ from 'jquery';
import Reviews from './components/Reviews.jsx';
import RatingDetails from './components/RatingDetails.jsx';


const RatingsBar = styled.div`
  font-family: Lato, Helvetica Neue, Helvetica, sans-serif;
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      users: []
    };
  }

  componentDidMount() {
    this.getAllReviews();
    this.getAllUsers();
  }

  // REACT ROUTING
  getAllReviews() {
    $.get('/books/1/reviews', (data) => {
      this.setState({
        reviews: data
      });
    });
  }

  getAllUsers() {
    $.get('/books/1/users', (data) => {
      this.setState({
        users: data
      })
    })
  }

  render() {
    return (
      <div>
        <RatingDetails reviews={this.state.reviews}/>
        <RatingsBar>
          <span>Filter</span>
          <span> | </span>
          <span>Sort order</span>
        </RatingsBar>
      <hr />
        <div className="app">
          <Reviews reviews={this.state.reviews} users={this.state.users} />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
