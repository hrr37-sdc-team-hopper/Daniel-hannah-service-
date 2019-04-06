import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import $ from 'jquery';
import Reviews from './components/Reviews.jsx';
import RatingDetails from './components/RatingDetails.jsx';
import Filter from './components/Filter.jsx'
import AddReview from './components/AddReview.jsx'

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
  color: #333333;
  border: #DCD6CC 1px solid;
  border-radius: 3px;
  background: #FFFFFF;
  resize: none
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
      rating: 0,
      ratedReviews: [],
      // five: 0,
      // four: 0,
      // three: 0,
      // two: 0,
      // one: 0,
    };
    this.handleReviews = this.handleReviews.bind(this);
  }

  // componentDidMount() {
  //   fetch(this.getAllReviews())
  //     .then(() => {
  //       this.sortByRating();
  //     })
  //     .then(() => {
  //       this.getAllUsers();
  //     });
  // }

  componentDidMount() {
    this.getAllReviews();
    this.getAllUsers();
  }

  // IMPLEMENT REACT ROUTING
  getAllReviews() {
    $.get('/books/1/reviews', (data) => {
      const ratings = [];
      data.map((review) => { ratings.push(review.rating); });
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

  getRatedReviews(rating) {
    $.get(`/books/1/reviews/${this.state.rating}`, (data) => {
      this.setState({
        ratedReviews: data
      });
    });
  }

  async handleReviews(selectedRating) {
    await this.setState({ rating: selectedRating });
    await this.getRatedReviews(this.state.rating);
  }
  // sortByRating() {
  //   console.log(this.state.reviews, 'reviews')
  //   this.state.ratings.map((rating) => {
  //     if (rating === 5) {
  //       this.setState({ five: (this.state.five + 1) });
  //     }
  //     if (rating === 4) {
  //       this.setState({ four: (this.state.four + 1) });
  //     }
  //     if (rating === 3) {
  //       this.setState({ three: (this.state.three + 1) });
  //     }
  //     if (rating === 2) {
  //       this.setState({ two: (this.state.two + 1) });
  //     }
  //     if (rating === 1) {
  //       this.setState({ one: (this.state.one + 1) });
  //     }
  //     this.setState({ all: this.props.ratings.length })
  //   });
  // }

  render() {
    const { reviews, ratings, ratedReviews, users, rating } = this.state;
    return (
      <Container className="app">
        <RatingDetails reviews={reviews} ratings={ratings} />
        <br />
        <Align>
          <Filter reviews={reviews} ratings={ratings} onSelectRating={this.handleReviews} />
          <span>|</span>
          <StyledLink>Sort order</StyledLink>
          <Search>
            <input placeholder="Search review text" />
          </Search>
        </Align>
        <hr />
        <br />
        <div>
          <Reviews rating={rating} ratedReviews={ratedReviews} reviews={reviews} users={users} />
        </div>
        <AddReview />
      </Container>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
