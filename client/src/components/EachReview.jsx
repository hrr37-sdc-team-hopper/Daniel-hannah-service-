import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
// import StarRatingComponent from 'react-star-rating-component';


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

class EachReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: ''
    };
  }

  render() {

    const float = {
      float: 'right',
    };

    return (
      <div>
        {this.props.users.map((user, index) => {
          if (user.id === this.props.userId) {
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
                  <StarRatings rating={this.props.rating} starRatedColor="#FF7F50" numberOfStars={5} name="rating" starDimension="20px" starSpacing="0px" />
                  <span style={float}>{this.props.date}</span>
                  <ReviewContent>
                    <p>{this.props.review}</p>
                  </ReviewContent>
                </UserDetails>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default EachReview;
