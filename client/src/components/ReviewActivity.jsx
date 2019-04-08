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

class ReviewActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewId: 0,
      likes: 0
    };
    this.likeHandler = this.likeHandler.bind(this);
    this.saveLike = this.saveLike.bind(this);
  }

  async likeHandler() {
    await this.setState({
      reviewId: this.props.reviewId
    });
    await this.saveLike(this.state.reviewId);
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
        <span>{this.props.likes} likes • </span>
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
