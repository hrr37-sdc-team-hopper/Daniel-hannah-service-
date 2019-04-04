import React from 'react';
import EachReview from './EachReview.jsx';
import RatingDetails from './RatingDetails.jsx'

const Reviews = (props) => {
  return (
    <div>
      <RatingDetails reviews={props.reviews}/>
      <span>
        <div>Filter</div>
        <div> | </div>
        <div>Sort order</div>
      </span>
      <hr />
      <div className="reviews">
        {props.reviews.map((review, index) => {
          return (
            <div className="review-container" key ={index}>
              <EachReview className="txn-data" userId={review.user_id} users={props.users} rating={review.rating} date={review.date} review={review.review} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
