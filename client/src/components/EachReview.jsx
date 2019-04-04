import React from 'react';
import StarRatings from 'react-star-ratings';

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
                <p>{user.username} rated it </p>
                <StarRatings rating={this.props.rating} starRatedColor="orange" numberOfStars={5} name="rating" />
                <p>{this.props.date}</p>
                <p>{this.props.review}</p>
              </div>
            )
          }
        })}
      </div>
    )
  }
}

export default EachReview;
