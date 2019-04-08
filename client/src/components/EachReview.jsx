import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
import ReviewActivity from './ReviewActivity.jsx'

const ReviewContent = styled.div`
  font-family: Merriweather, Georgia, serif;
  line-height: 21px;
  font-size: 14px;
`;

const User = styled.a`
  color: #00635d;
  font-weight: bold;
  text-decoration: none;
  &:hover {text-decoration: underline};
  cursor: pointer
`;

const UserDetails = styled.div`
  font-family: Lato, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
  overflow: hidden;
  display: block;
`;

const Image = styled.a`
  margin-right: 10px;
  float: left;
`;

const Float = styled.span`
  float: right;
  color: #999999;
`;

const EachReview = (props) => {
  const {
    userId,
    users,
    rating,
    date,
    review,
    reviews,
    reviewId,
    likes,
    id
  } = props;

  return (
    <div>
      {users.map((user, index) => {
        if (user.id === userId) {
          return (
            <div key={index}>
              <Image>
                <img src={user.avatar} alt="" />
              </Image>
              <UserDetails>
                <User>
                  {user.username}
                </User>
                <span> rated it </span>
                <StarRatings
                  rating={rating}
                  starRatedColor="#FF7F50"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing="0px"
                  z-index={-1}
                />
                <Float>{date}</Float>
                <ReviewContent>
                  <p>{review}</p>
                </ReviewContent>
                <ReviewActivity
                  id={id}
                  reviews={reviews}
                  reviewId={reviewId}
                  likes={likes}
                />
              </UserDetails>
            </div>
          );
        }
      })}
    </div>
  );
};

export default EachReview;
