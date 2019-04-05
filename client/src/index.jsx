import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import $ from 'jquery';
import Reviews from './components/Reviews.jsx';
import RatingDetails from './components/RatingDetails.jsx';
import Filter from './components/Filter.jsx'

const Container = styled.div`
  float: left;
  width: 625px;
  padding-right: 10px;
  padding-left: 8px;
`;

const StyledLink = styled.a`
  color: #00635d;
  textDecoration: none;
  font-family: Lato, Helvetica Neue, Helvetica, sans-serif;
  cursor: pointer;
  &:hover {text-decoration: underline};
  display: inline-block;
  position: relative;
  flex-basis: 400px;
`;

const Search = styled.span`
  float: right;
`;

const Align = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 10px;

`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      users: [],
      ratings: [],
      // five: 0,
      // four: 0,
      // three: 0,
      // two: 0,
      // one: 0
    };
  }

  componentDidMount() {
    this.getAllReviews();
    this.getAllUsers();
    // this.sortByRating();
  }

  // IMPLEMENT REACT ROUTING
  getAllReviews() {
    $.get('/books/1/reviews', (data) => {
      let ratings = [];
      data.map((review) => { ratings.push(review.rating) });
      this.setState({
        reviews: data,
        ratings: ratings
      });
    });
  }

  getAllUsers() {
    $.get('/books/1/users', (data) => {
      this.setState({
        users: data
      });
    });
  }


  // sortByRating() {
  //   console.log(this.state.reviews)
  //   this.state.reviews.map((review) => {
  //     if (review.rating === 5) {
  //       this.setState({ five: (this.state.five + 1) });
  //     }
  //     if (review.rating === 4) {
  //       this.setState({ four: (this.state.five + 1) });
  //     }
  //     if (review.rating === 3) {
  //       this.setState({ three: (this.state.five + 1) });
  //     }
  //     if (review.rating === 2) {
  //       this.setState({ two: (this.state.five + 1) });
  //     }
  //     if (review.rating === 1) {
  //       this.setState({ one: (this.state.five + 1) });
  //     }
  //   });
  // }


  render() {
    return (
      <Container className="app">
        <RatingDetails reviews={this.state.reviews} ratings={this.state.ratings}/>
        <br />
        <Align>
          <Filter reviews={this.state.reviews} />
          <span>|</span>
          <StyledLink>Sort order</StyledLink>
          <Search>
            <input value="Search review text" />
          </Search>
        </Align>
        <hr />
        <br />
        <div>
          <Reviews reviews={this.state.reviews} users={this.state.users} />
        </div>
      </Container>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
