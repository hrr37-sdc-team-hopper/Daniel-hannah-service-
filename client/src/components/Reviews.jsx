import React from 'react';
import styled from 'styled-components';
import EachReview from './EachReview.jsx';

const Reviews = (props) => {
  const block = {
    display: 'block',
  };

  return (
    <div className="reviews" style={block}>
      {props.reviews.map((review, index) => {
        return (
          <div className="review-container" key ={index}>
            <EachReview className="txn-data" userId={review.user_id} users={props.users} rating={review.rating} date={review.date} review={review.review} />
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
