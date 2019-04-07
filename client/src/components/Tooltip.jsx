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
  border: 8px solid #D6D0C4;
  background-color: white;
  position: absolute;
  top: 9px;
  left: -15px;
  border-radius: 10px;
  opacity: 1 !important;
  padding: 8px;
  width: 500px
  ;
`;

const Arrow = styled.div`
  position: absolute;
  width: 0;
  height: 50;
  border-width: 11px;
  border-style: solid;
  border-color:  transparent transparent #D6D0C4 transparent;
  left: 55px;
`;

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRating: 0,
      all: 0,
      five: 0,
      four: 0,
      three: 0,
      two: 0,
      one: 0,

    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    if (e.target.innerHTML[0] === 'a') {
      this.props.onSelectRating(e.target.innerHTML[0]);
    } else {
      const rating = Number(e.target.innerHTML[0]);
      this.props.onSelectRating(rating);
    }
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
    return (
      <div>
        {this.props.display ?
          (
            <Arrow>
            <ToolTipBox onMouseLeave={this.props.onMouseLeave} onMouseEnter={this.props.onMouseEnter}>
              <span>
                <All onClick={this.clickHandler}>all ({this.state.all})</All>
                <span> | </span>
                <Rating onClick={this.clickHandler}>5 stars ({this.state.five})</Rating>
                <span> | </span>
                <Rating onClick={this.clickHandler}>4 stars ({this.state.four})</Rating>
                <span> | </span>
                <Rating onClick={this.clickHandler}>3 stars ({this.state.three})</Rating>
                <span> | </span>
                <Rating onClick={this.clickHandler}>2 stars ({this.state.two})</Rating>
                <span> | </span>
                <Rating onClick={this.clickHandler}>1 star ({this.state.one})</Rating>
              </span>
            </ToolTipBox>
            </Arrow>
          ) : (null)
        }
      </div>
    );
  }
}

export default Tooltip;
