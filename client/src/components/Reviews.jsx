import React from 'react';
import EachReview from './EachReview.jsx';

const Reviews = (props) => {
  const block = {
    display: 'block',
  };
  console.log(`inside Reviews.jsx render ${JSON.stringify(props)}`);
  if (props.rating === 0 || props.rating === 'a') {
    return (
      <div className="reviews" style={block}>
        {props.reviews.map((review, index) => {
          return (
            <div className="review-container" key={index}>
              <EachReview
                reviews={props.reviews}
                userId={review.user_id}
                user={review.username}
                avatar={review.avatar}
                rating={review.rating}
                date={review.date}
                review={review.review}
                reviewId={review.id}
                likes={review.likes}
              />
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="reviews" style={block}>
      {props.ratedReviews.map((review, index) => {
        return (
          <div className="review-container" key={index}>
            <EachReview
              id={props.id}
              userId={review.user_id}
              user={review.username}
              avatar={review.avatar}
              rating={review.rating}
              date={review.date}
              review={review.review}
              reviews={props.reviews}
              likes={review.likes}
              reviewId={review.id}
            />
          </div>
        );
      })
      }
    </div>
);
};

export default Reviews;
