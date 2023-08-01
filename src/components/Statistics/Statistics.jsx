
import PropTypes from "prop-types";
import { StatisticArea, Paragraph} from './Statistics.styled'

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <StatisticArea>
        <Paragraph>Good: {good}</Paragraph>
        <Paragraph>Neutral: { neutral}</Paragraph>
        <Paragraph>Bad: {bad}</Paragraph>
        <Paragraph>Total: { total}</Paragraph>
        <Paragraph>Positive feedback: { positivePercentage}%</Paragraph>
    </StatisticArea>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}