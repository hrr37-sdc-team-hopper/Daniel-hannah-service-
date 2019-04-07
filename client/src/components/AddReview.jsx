import React from 'react';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';
import $ from 'jquery';

const Search = styled.form`
  float: left;
  background: #FFFFFF;
  resize: none;
  margin-top: 40px;
  margin-left: 70px;
  font:-family: Merriweather, Georgia, serif;
`;

const TextBorder = styled.textarea`
  border: 1px solid #D6D0C4;
  border-radius: 5px;
`;

const Submit = styled.input`
  background-color: #F4F1EA;
  border-radius: 3px;
  color: #333333;
  height: 35px;
  width: 100px;
  float: right;
  margin-top: 13px;
  margin-bottom: 30px;
  margin-right: 30px;
  border: 1px solid #D6D0C4;
  box-shadow: 0 0 10px #F4F1EA;
`;

const Star = styled.span`
  float: right;
  margin-top: 15px;
  margin-right: 18px
`;

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRating: 0,
      review: '',
      userId: 101
    };
    this.ratingHandler = this.ratingHandler.bind(this);
  }

  ratingHandler(rating) {
    this.setState({
      selectedRating: rating
    });
  }

  reviewHandler(myReview) {
    this.setState({
      review: myReview
    });
  }

  postReview() {
    $.post(`/books/${this.props.id}/reviews`, ({ rating: this.state.selectedRating, review: this.state.review, user_id: this.state.userId }));
  }


  render() {
    const { selectedRating } = this.state;
    return (
      <div>
        <Search action="/books/1/reviews" method="post" name="review">
          <TextBorder name="review" rows="10" cols="80" placeholder="Type your review here" />
          <Submit type="submit" value="Post Review" />
          <Star>
            <StarRatings
              changeRating={this.ratingHandler}
              name="rating"
              isSelectable={true}
              rating={selectedRating}
              starRatedColor="#FF7F50"
              numberOfStars={5}
              starDimension="25px"
              starSpacing="0px"
              starHoverColor="#FF7F50"
            />
          </Star>
        </Search>
      </div>
    );
  }
}

export default AddReview;
