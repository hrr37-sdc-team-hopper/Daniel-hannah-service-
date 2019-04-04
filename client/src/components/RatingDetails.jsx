import React from 'react';
import styled from 'styled-components';

const RatingDetailsBar = styled.div`
  font-family: Lato, Helvetica Neue, Helvetica, sans-serif;
  `;

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
        <RatingDetailsBar>
        <p>COMMUNITY REVIEWS</p>
        <hr />
        {/* <AvgStarRating /> */}

          <span>Rating details • </span>
          <span>{this.props.reviews.length} ratings</span>
        </RatingDetailsBar>

      </div>
    );
  }
}
export default RatingDetails;
