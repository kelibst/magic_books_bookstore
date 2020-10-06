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
    const strokes = {
      blue: '#007bff',
      danger: '#f00',
      orange: '#f2912a',
      purple: '#f22ad3',
    };
    const strokeDashoffset = (this.circumference - (progress / 100) * this.circumference);

    const strokeColor = () => {
      const newProg = Number(progress);

      let res = strokes.blue;
      if (newProg < 30) {
        res = strokes.danger;
      } else if (newProg > 30 && newProg <= 50) {
        res = strokes.orange;
      } else if (newProg > 50 && newProg <= 70) {
        res = strokes.blue;
      } else if (newProg > 70) {
        res = strokes.purple;
      }
      return res;
    };
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
          stroke={strokeColor()}
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
  radius: PropTypes.number.isRequired,
  stroke: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
