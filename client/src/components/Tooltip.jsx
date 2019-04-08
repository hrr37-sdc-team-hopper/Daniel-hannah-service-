import React from 'react';
import styled from 'styled-components';

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
  z-index: 1
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

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRating: 0,
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

  render() {
    return (
      <div>
        {this.props.display ?
          (
            <Arrow>
              <ToolTipBox onMouseLeave={this.props.onMouseLeave} onMouseEnter={this.props.onMouseEnter}>
                <span>
                  <All onClick={this.clickHandler}>all ({this.props.all})</All>
                  <span> | </span>
                  <Rating onClick={this.clickHandler}>5 stars ({this.props.five})</Rating>
                  <span> | </span>
                  <Rating onClick={this.clickHandler}>4 stars ({this.props.four})</Rating>
                  <span> | </span>
                  <Rating onClick={this.clickHandler}>3 stars ({this.props.three})</Rating>
                  <span> | </span>
                  <Rating onClick={this.clickHandler}>2 stars ({this.props.two})</Rating>
                  <span> | </span>
                  <Rating onClick={this.clickHandler}>1 star ({this.props.one})</Rating>
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
