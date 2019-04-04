import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewList from './components/ReviewList.jsx';


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
        <h1>Reviews</h1>
        <div className="app">
          <ReviewList reviews={this.state.reviews} users={this.state.users} />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
