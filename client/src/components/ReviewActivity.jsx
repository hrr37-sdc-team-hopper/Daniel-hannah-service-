import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';

const Button = styled.button`
align: center;
background-color: #F4F1EA;
border-radius: 3px;
color: #333333;
height: 25px;
width: 48px;
margin-bottom: 20px;
border: 1px solid #D6D0C4;
box-shadow: 0 0 10px #F4F1EA;
cursor: pointer;
&:focus {outline: none; box-shadow:0 0 10px #D6D0C4;}
`;

const Likes = styled.span`
  color: #00635D;
  cursor: pointer;
  text-decoration: none;
  &:hover {text-decoration: underline};
`;

class ReviewActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewId: 0,
      likes: this.props.likes
    };
    this.likeHandler = this.likeHandler.bind(this);
    this.saveLike = this.saveLike.bind(this);
  }

  async likeHandler() {
    let currentLikes = this.state.likes + 1;
    await this.setState({
      reviewId: this.props.reviewId,
      likes: currentLikes
    });
    await this.saveLike(this.props.reviewId);
  }

  saveLike(id) {
    $.ajax({
      url: `/books/${this.props.id}/reviews`,
      type: 'PUT',
      data: { reviewId: id },
      success: () => { this.props.getAllReviews(); },
    });
  }

  render() {
    return (
      <div>
        <Likes>{this.state.likes} likes</Likes>
        <span> · </span>
        <span>
          <Button
            onClick={this.likeHandler}
          >
          Like
          </Button>
        </span>
      </div>
    );
  }
}

export default ReviewActivity;
