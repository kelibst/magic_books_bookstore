import React, { Component } from 'react';
import './ProgressBar.css';
import PropTypes from 'prop-types';

class ProgressBar extends Component {
  constructor(props) {
    super(props);

    const { radius, stroke } = this.props;

    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }

  render() {
    const { radius, stroke, progress } = this.props;

    const strokeDashoffset = (this.circumference - (progress / 100) * this.circumference);

    return (
      <svg
        height={radius * 2}
        width={radius * 2}
      >
        <circle
          fill="white"
          stroke="#f8f9fa"
          strokeWidth={stroke}
          r={this.normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#007bff"
          fill="transparent"
          strokeDasharray={`${this.circumference} ${this.circumference}`}
          style={{ strokeDashoffset }}
          strokeWidth={stroke}
          r={this.normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
    );
  }
}

ProgressBar.propTypes = {
  radius: PropTypes.func.isRequired,
  stroke: PropTypes.func.isRequired,
  progress: PropTypes.func.isRequired,
};

export default ProgressBar;
