import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';


const RatingDetailsBar = styled.div`
  font-family: Lato, Helvetica Neue, Helvetica, sans-serif;
  `;

class RatingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // average: this.averageRating()
    };
  }

  // averageRating() {
  //   let total = 0;
  //   let { length } = this.props.ratings;

  //   this.props.ratings.map((rating) => {
  //     total += rating;
  //   });
  //   return (total / length);
  // }

  render() {
    const ahref = {
      color: '#00635D',
      cursor: 'pointer',
      textDecoration: 'none',
    };

    const header = {
      color: '#382110',
      fontWeight: '450',
    };

    return (
      <div>
        <RatingDetailsBar>
          <p style={header}>COMMUNITY REVIEWS</p>
          <hr />
          <StarRatings rating={4} starRatedColor="#FF7F50" numberOfStars={5} name="rating" starDimension="20px" starSpacing="0px" />
          {this.props.average}
          <span> 4.03  </span>
          <a href="#" style={ahref}>Rating details</a>
          <span> • {this.props.reviews.length} ratings</span>
        </RatingDetailsBar>

      </div>
    );
  }
}
export default RatingDetails;
