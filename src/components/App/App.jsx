import {useState} from 'react';
import { Container } from "./App.styled";
import { Statistics } from '../Statistics';
import { FeedbackOptions } from '../FeedbackOptions'
import { Section } from '../Section'
import { Notification } from '../Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBed] = useState(0);

  const options = Object.keys({good, neutral, bad});

  const onLeaveFeedback = (feedbackName) => {
   // eslint-disable-next-line
   switch (feedbackName) {
     case 'good':
       setGood(prevState => prevState + 1);
       break;
     
     case 'neutral':
       setNeutral(prevState => prevState + 1);
       break;
     
     case 'bad':
       setBed(prevState => prevState + 1);
       break;
   }
 }
 
  const countTotalFeedback = good + neutral + bad;
  
  const countPositiveFeedbackPercentage = Math.round((good / countTotalFeedback) * 100);
  
  return( 
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}>
        </FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback === 0 ? <Notification message="There is no feedback"/> : 
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}>
          </Statistics>}
      </Section>
    </Container >
  )  
}


