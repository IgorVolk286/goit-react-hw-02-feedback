import React, { Component } from 'react';
import { SectionFeedBack } from './ButtonsSection/SectionFeedBack';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeGood = e => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  changeNeutral = e => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  changeBad = e => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <SectionFeedBack
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          onChangeClickG={this.changeGood}
          onChangeClickN={this.changeNeutral}
          onChangeClickB={this.changeBad}
          total={this.countTotalFeedback}
          feedbackPercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}
