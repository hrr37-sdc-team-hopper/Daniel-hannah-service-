import React from 'react';

class RatingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avgRating: 0
    }
  }

  // getAverageRatings() {
  //   $.get('/books/:id/reviews')
  // }

  render() {
    return (
      <div>
        <p>COMMUNITY REVIEWS</p>
        <hr />
        {/* <StarRating /> */}
        <p>Rating details</p>
        <p>{this.props.reviews.length} ratings</p>
      </div>
    );
  }
}
export default RatingDetails;
