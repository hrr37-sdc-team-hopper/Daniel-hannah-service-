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

const ReviewCount = styled.span`
  color: #999999;
`;

const RatingDetails = (props) => {
  const { average, reviews} = props;
  return (
    <div>
      <RatingDetailsBar>
        <Header>COMMUNITY REVIEWS</Header>
        <hr />
        <StarRatings rating={4} starRatedColor="#FF7F50" numberOfStars={5} name="rating" starDimension="20px" starSpacing="0px" />
        <span> {average} </span>
        <LinkTag href="#">Rating details</LinkTag>
        <ReviewCount> • {reviews.length} ratings</ReviewCount>
      </RatingDetailsBar>
    </div>
  );
};

export default RatingDetails;
