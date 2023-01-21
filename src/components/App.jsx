// import Section from 'components/Feeadback/Feedback'
import React, { Component } from 'react';
import Statistics from 'components/Statistic/Statistic';
import FeedbackOptions from 'components/Feeadback/Feedback';
export default class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  
  nameBtn = ['good', 'neutral', 'bad'];
  onLeaveFeedback = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    const y = good + bad + neutral;
    return y;
  };
  countPositiveFeedbackPercentage = () => {
    const { neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return Math.round(((total - (bad + neutral)) / total) * 100);
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div>
        <FeedbackOptions
          options={this.nameBtn}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
