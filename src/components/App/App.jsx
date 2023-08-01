import {Component} from 'react';
import { Container } from "./App.styled";
import { Statistics } from '../Statistics';
import { FeedbackOptions } from '../FeedbackOptions'
import { Section } from '../Section'
import { Notification } from '../Notification';

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    let goodFeedback = this.state.good;
    let totalFeedbak = this.countTotalFeedback();
    return Math.round((goodFeedback / totalFeedbak)*100);
  }
  
  onLeaveFeedback = (state) => {
    this.setState(prevState => ({
     [state]: prevState[state] + 1
    })) 
  }

  render() {   
    const options = Object.keys(this.state);
    const good = this.state.good;
    const neutral = this.state.neutral;
    const bad = this.state.bad;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}>
          </FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {total===0? <Notification message="There is no feedback"/> : 
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}>
          </Statistics>}
        </Section>
      </Container >
    );
  }  
}


