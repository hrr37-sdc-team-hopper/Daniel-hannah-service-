import React from 'react';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';
import $ from 'jquery';

const Search = styled.div`
  float: left;
  background: #FFFFFF;
  resize: none;
  margin-top: 40px;
  margin-left: 70px;
  font:-family: Merriweather, Georgia, serif;
`;

const Text = styled.textarea`
  border: 1px solid #D6D0C4;
  border-radius: 5px;
  &:focus {outline: none; box-shadow:0 0 10px #D6D0C4;}
`;

const Submit = styled.button`
  background-color: #F4F1EA;
  border-radius: 3px;
  color: #333333;
  height: 35px;
  width: 100px;
  float: right;
  margin-top: 13px;
  margin-bottom: 30px;
  margin-right: 5px;
  border: 1px solid #D6D0C4;
  box-shadow: 0 0 10px #F4F1EA;
  cursor: pointer;
  &:focus {outline: none; box-shadow:0 0 10px #D6D0C4;}
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
      myReview: '',
      userId: 101, // our demo assumes a user is logged in, thus the user's id will always be 101
    };
    this.ratingHandler = this.ratingHandler.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.postReview = this.postReview.bind(this);
    this.reviewHandler = this.reviewHandler.bind(this);
  }

  ratingHandler(rating) {
    this.setState({
      selectedRating: rating
    });
  }

  reviewHandler(event) {
    this.setState({
      myReview: event.target.value,
    });
  }

  async postReview(event) {
    event.preventDefault();

    const { myReview, selectedRating, userId } = this.state;
    const { id, onUpdate } = this.props;

    await $.post(`/books/${id}/reviews`, {
      review: myReview,
      rating: selectedRating,
      user_id: userId
    });

    await onUpdate(myReview);
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      review: '',
      rating: 0
    });
  }

  render() {
    const { selectedRating } = this.state;
    return (
      <div>
        <Search>
          <Text
            name="review"
            rows="12"
            cols="85"
            onChange={this.reviewHandler}
            placeholder="Type your review here"
          />
          <Submit onClick={this.postReview}>Post review</Submit>
          <Star>
            <StarRatings
              name="rating"
              onChange={this.ratingHandler}
              changeRating={this.ratingHandler}
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
