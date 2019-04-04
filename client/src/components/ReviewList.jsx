import React from 'react';
import Review from './Review.jsx';

const ReviewList = (props) => {
  return (
    <div className="reviews">
      {props.reviews.map((review, index) => {
        return (
          <div className="review-container" key ={index}>
            <Review className="txn-data" userId={review.user_id} users={props.users} />
            <div className="image-container">IMG HERE</div>
            <div className="rating-container">{review.rating}</div>
            <div className="date-container">{review.date}</div>
            <div className="text-container">{review.review}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewList;
