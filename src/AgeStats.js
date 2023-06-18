import React, { Component } from 'react';

class AgeStats extends Component {
  timeSince(date) {
    let today = new Date().getTime();
    let other_date = new Date(date).getTime();
    let difference = Math.abs(today - other_date);

    let days = Math.floor(difference / (1000 * 3600 * 24));
    let years = Math.floor(days / 365);
    days -= years * 365;
    let months = Math.floor(days / 31);
    days -= months * 31;

    return `${years} years ${months} months ${days} days`;
  }

  render() {
    return (
      <div>
        <h4>You are {this.timeSince(this.props.date)} old</h4>
      </div>
    );
  }
}

export default AgeStats;