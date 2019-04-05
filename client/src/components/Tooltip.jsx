import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';


const Rating = styled.a`
  color: #00635d;
  textDecoration: none;
  &:hover {text-decoration: underline};
  font-family: Lato, Helvetica Neue, Helvetica, sans-serif;
  cursor: pointer;
  padding: 5px;
  position: relative;
`;

const All = styled.a`
  color: #999999;
  textDecoration: none;
  &:hover {text-decoration: underline};
  font-family: Lato, Helvetica Neue, Helvetica, sans-serif;
  cursor: pointer;
  padding: 5px;
  position: relative;
`;

const ToolTipBox = styled.div`
  border: 10px solid #D6D0C4;
  background-color: white;
  position: absolute;
  border-radius: 10px;
  opacity: 1 !important;
  interactive: true;
  padding: 8px;
`;

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRating: 0,
      ratedReviews: []
    };
  }

  getRatings(rating) {
    $.get(`/books/1/reviews/${this.state.selectedRating}`, (data) => {
      this.setState({
        ratedReviews: data
      });
    });
  }

  clickHandler(e) {
    const rating = Number(e.target.innerHTML[0]);
    this.setState({
      selectedRating: rating
    });
  }

  // sortByRating() {
  //   console.log(this.props.ratings)
  //   this.props.ratings.map((rating) => {
  //     if (rating === 5) {
  //       this.setState({ five: (this.state.five + 1) });
  //     }
  //     if (rating === 4) {
  //       this.setState({ four: (this.state.four + 1) });
  //     }
  //     if (rating === 3) {
  //       this.setState({ three: (this.state.three + 1) });
  //     }
  //     if (rating === 2) {
  //       this.setState({ two: (this.state.two + 1) });
  //     }
  //     if (rating === 1) {
  //       this.setState({ one: (this.state.one + 1) });
  //     }
  //     this.setState({ all: this.props.ratings.length })
  //   });
  // }


  render() {
    console.log(this.props.display)
    return (
      <div>
        {this.props.display ?
          (
            <ToolTipBox>
              <span>
                <All>all ({this.state.all})</All>
                <span> | </span>
                <Rating onChange={this.clickHandler.bind(this)}>5 stars ({this.state.five})</Rating>
                <span> | </span>
                <Rating onChange={this.clickHandler.bind(this)}>4 stars ({this.state.four})</Rating>
                <span> | </span>
                <Rating onChange={this.clickHandler.bind(this)}>3 stars ({this.state.three})</Rating>
                <span> | </span>
                <Rating onChange={this.clickHandler.bind(this)}>2 stars ({this.state.two})</Rating>
                <span> | </span>
                <Rating onChange={this.clickHandler.bind(this)}>1 star ({this.state.one})</Rating>
              </span>
            </ToolTipBox>
          ) : (null)
        }
      </div>
    );
  }
}

export default Tooltip;
