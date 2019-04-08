import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import $ from 'jquery';
import AppRouter from './router.jsx';
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
  background: #FFFFFF;
`;

const SearchInput = styled.input`
  width: 130px;
  border: #DCD6CC 1px solid;
  border-radius: 3px;
  padding: 5px
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
      id: this.props.match.params.id,
      five: 0,
      four: 0,
      three: 0,
      two: 0,
      one: 0,
      all: 0,
      averageRating: 0
    };
    this.handleReviews = this.handleReviews.bind(this);
    this.updateReviews = this.updateReviews.bind(this);
    this.sortByRating = this.sortByRating.bind(this);
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

  async componentDidMount() {
    await this.getAllReviews();
    await this.getAllUsers();
    await this.sortByRating();
    await this.average();
  }

  async getAllReviews() {
    const allRatings = [];
    await $.get(`/books/${this.state.id}/reviews`, (data) => {
      data.map((review) => {
        allRatings.push(review.rating);
      });
      this.setState({ reviews: data })
    });
    await this.setState({ ratings: allRatings })
  }

  getAllUsers() {
    $.get(`/books/${this.state.id}/users`, (data) => {
      this.setState({
        users: data
      });
    });
  }

  getRatedReviews(rating) {
    $.get(`/books/${this.state.id}/reviews/${this.state.rating}`, (data) => {
      this.setState({
        ratedReviews: data
      });
    });
  }

  updateReviews(postedReview) {
    this.setState(prevState => ({
      reviews: [postedReview, ...prevState.reviews],
    }));
    this.getAllReviews();
    // QUESTION: why won't my page rerender without calling another get request even though I am updating the state on my main index.jsx file???
  }

  async handleReviews(selectedRating) {
    await this.setState({ rating: selectedRating });
    await this.getRatedReviews(this.state.rating);
  }

  sortByRating() {
    const { ratings } = this.state;
    ratings.map((rating) => {
      if (rating === 5) {
        const current = this.state.five;
        this.setState({ five: (current + 1) });
      }
      if (rating === 4) {
        const current = this.state.five;
        this.setState({ four: (current + 1) });
      }
      if (rating === 3) {
        const current = this.state.five;
        this.setState({ three: (current + 1) });
      }
      if (rating === 2) {
        const current = this.state.five;
        this.setState({ two: (current + 1) });
      }
      if (rating === 1) {
        const current = this.state.five;
        this.setState({ one: (current + 1) });
      }
      const allRatings = this.state.ratings
      const count = allRatings.length;
      this.setState({ all: count });
    });
  }

  average() {
    const { ratings } = this.state;
    const sumRatings = ratings.reduce((acc, val) => acc + val);
    let average = sumRatings / (ratings.length);
    average = +average.toFixed(2);
    this.setState({ averageRating: average });
  }

  render() {
    const { reviews, ratings, ratedReviews, users, rating, averageRating } = this.state;
    return (
      <Container className="app">
        <RatingDetails
          reviews={reviews}
          ratings={ratings}
          average={averageRating}
        />
        <br />
        <Align>
          <Filter
            reviews={reviews}
            ratings={ratings}
            onSelectRating={this.handleReviews}
            five={this.state.five}
            four={this.state.four}
            three={this.state.three}
            two={this.state.two}
            one={this.state.one}
            all={this.state.all}
          />
          <span>|</span>
          <StyledLink>Sort order</StyledLink>
          <Search>
            <SearchInput placeholder="Search review text" />
          </Search>
        </Align>
        <hr />
        <br />
        <div>
          <Reviews
            rating={rating}
            ratedReviews={ratedReviews}
            reviews={reviews}
            users={users}
            id={this.state.id}
            getAllReviews={this.getAllReviews}
          />
        </div>
        <AddReview
          id={this.state.id}
          onUpdate={this.updateReviews}
        />
      </Container>
    );
  }
}

export default App;

ReactDOM.render(<AppRouter />, document.getElementById('app'));
