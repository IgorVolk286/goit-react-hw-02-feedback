import React, { Component } from 'react';
import { SectionFeedBack } from './ButtonsSection/SectionFeedBack';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.value + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <SectionFeedBack
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          onChangeClick={this.changeGood}
        />
      </div>
    );
  }
}
