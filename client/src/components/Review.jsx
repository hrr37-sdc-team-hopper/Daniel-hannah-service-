import React from 'react';
import $ from 'jquery';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // componentDidMount() {
  //   this.getUser(1);
  // }

  // getUser(userId) {
  //   $.get(`/books/1/users/${userId}`, (data) => {
  //     this.setState({
  //       user: data
  //     });
  //   });
  // }

  // getUser(userId) {
  //   fetch(`/books/${userId}/users`)
  //     .then(res => res.json())
  //     .then((user) => {
  //       this.setState({
  //         user: user
  //       })
  //     })
  // }


  render() {
    return (
      <div>
        {this.props.users.map((user, index) => {
          if (user.id === this.props.userId) {
            return (
              <div key={index}>
                <p key={index}>{user.username}</p>
                <img src={user.avatar} alt="" />
              </div>
            )
          }
        })}
      </div>
    )
  }
}

export default Review;
