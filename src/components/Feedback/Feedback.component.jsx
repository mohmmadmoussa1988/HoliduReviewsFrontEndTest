import React from 'react';
import { FeedbackWrapper, Feedback } from './Feedback.styles';
import PositiveFeedback from '../../assets/thumb-up.svg';
import NegativeFeedback from '../../assets/thumb-down.svg';

const Feeback = ({ positiveFeeback, negativeFeedback }) => {
    return (
        <FeedbackWrapper>
            {positiveFeeback &&
                <Feedback>
                    <img src={PositiveFeedback} alt={'positiveFeedback'} />
                    {positiveFeeback}
                </Feedback>
            }
            {negativeFeedback &&
                <Feedback>
                    <img src={NegativeFeedback} alt={'negativeFeedback'} />
                    {negativeFeedback}
                </Feedback>
            }
        </FeedbackWrapper>
    )
}

export default Feeback;