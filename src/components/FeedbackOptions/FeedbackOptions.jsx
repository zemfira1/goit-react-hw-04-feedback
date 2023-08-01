import PropTypes from "prop-types";
import { ButtonArea, Button } from './FeedbackOptions.styled';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <ButtonArea>
            {options.map(option => {
                return <Button onClick={()=>onLeaveFeedback(option)} key={nanoid()}>{option}</Button>
            })}
        </ButtonArea>)
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}