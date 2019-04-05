import React from 'react';
import styled from 'styled-components';

const Rating = styled.a`
  color: #00635d;
  textDecoration: none;
  font-family: Lato, Helvetica Neue, Helvetica, sans-serif;
  cursor: pointer;
  padding: 5px;
  position: relative;
`;

const ToolTipBox = styled.div`
  border: 10px solid #D6D0C4;
  position: absolute;


`;

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props.display)
    return (
      <div>
        {this.props.display ?
          (
            <ToolTipBox>
              <span>
                <Rating>All</Rating>
                <span> | </span>
                <Rating>5 stars</Rating>
                <span> | </span>
                <Rating>4 stars</Rating>
                <span> | </span>
                <Rating>3 stars</Rating>
                <span> | </span>
                <Rating>2 stars</Rating>
                <span> | </span>
                <Rating>1 star</Rating>
              </span>
            </ToolTipBox>
          ) : (null)
        }
      </div>
    );
  }
}

export default Tooltip;
