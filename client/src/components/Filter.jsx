import React from 'react';
import styled from 'styled-components';
import Tooltip from './Tooltip.jsx';

const StyledLink = styled.a`
  color: #00635d;
  textDecoration: none;
  font-family: Lato, Helvetica Neue, Helvetica, sans-serif;
  cursor: pointer;
  &:hover {text-decoration: underline};
  display: inline-block
`;

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTooltip: false,
    };
    this.hideTooltip = this.hideTooltip.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
  }

  hideTooltip() {
    this.setState({ displayTooltip: false });
  }

  showTooltip() {
    this.setState({ displayTooltip: true });
  }

  render() {
    return (
      <div>
        <StyledLink onMouseEnter={this.showTooltip}>Filter</StyledLink>
        <Tooltip interactive reviews={this.props.reviews} display={this.state.displayTooltip} onMouseLeave={this.hideTooltip} ratings={this.props.ratings}/>
      </div>
    );
  }
}

export default Filter;
