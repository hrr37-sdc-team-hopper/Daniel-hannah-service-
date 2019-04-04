import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewList from './components/ReviewList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    this.getAllReviews();
  }

  // REACT ROUTING
  getAllReviews() {
    $.get('/books/:id/reviews', (data) => {
      this.setState({
        reviews: data
      });
    });
  }

  render() {
    return (
      <ReviewList reviews={this.state.reviews}/>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
