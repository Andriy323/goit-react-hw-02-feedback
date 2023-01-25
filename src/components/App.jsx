// import Section from 'components/Feeadback/Feedback'
import React, { Component } from 'react';
import Statistics from 'components/Statistic/Statistic';
import Section from './Section/Section';
import FeedbackOptions from 'components/Feeadback/Feedback';

import css  from "./App.module.css";

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

    const total = good + bad + neutral;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return Math.round(((total - (bad + neutral)) / total) * 100);
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div className={css.container}>
        <Section title="Pleas leave feedback">
          <FeedbackOptions
            options={this.nameBtn}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
