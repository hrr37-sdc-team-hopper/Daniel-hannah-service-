import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';


const ReviewContent = styled.div`
  font-family: Merriweather, Georgia, serif;
  line-height: 21px;
  font-size: 14px;
`;

const UserDetails = styled.div`
  font-family: Lato, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px
`;

class EachReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: ''
    };
  }

  render() {
    return (
      <div>
        {this.props.users.map((user, index) => {
          if (user.id === this.props.userId) {
            return (
              <div key={index}>
                <img src={user.avatar} alt="" />
                <UserDetails>
                  <p>{user.username} rated it </p>
                  <StarRatings rating={this.props.rating} starRatedColor="orange" numberOfStars={5} name="rating" />
                  <p>{this.props.date}</p>

                </UserDetails>
                <ReviewContent>
                  <p>{this.props.review}</p>
                </ReviewContent>

              </div>
            )
          }
        })}
      </div>
    )
  }
}

export default EachReview;
