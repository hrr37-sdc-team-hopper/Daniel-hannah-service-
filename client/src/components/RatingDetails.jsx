import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';


const RatingDetailsBar = styled.div`
  font-family: Lato, Helvetica Neue, Helvetica, sans-serif;
`;

const LinkTag = styled.a`
  color: #00635D;
  cursor: pointer;
  text-decoration: none;
  &:hover {text-decoration: underline};
`;

const Header = styled.p`
  color: #382110;
  fontWeight: 450
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
    const { average, reviews } = this.props;

    return (
      <div>
        <RatingDetailsBar>
          <Header>COMMUNITY REVIEWS</Header>
          <hr />
          <StarRatings rating={4} starRatedColor="#FF7F50" numberOfStars={5} name="rating" starDimension="20px" starSpacing="0px" />
          {average}
          <span> 4.03  </span>
          <LinkTag href="#">Rating details</LinkTag>
          <span> • {reviews.length} ratings</span>
        </RatingDetailsBar>
      </div>
    );
  }
}
export default RatingDetails;
