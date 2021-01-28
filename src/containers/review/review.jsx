import React from 'react';
import { ReviewContainerWrapper, ReviewRow, ReviewTitle, ReviewBody, Writername, ReviewDate, ReviewSeparator } from './review.styles';
import Score from '../../components/Score/Score.component';
import Channel from '../../components/Channel/Channel.component';
import Feedback from '../../components/Feedback/Feedback.component';
import Moment from 'react-moment';

const ReviewContainer = ({ review }) => {
    const { headline, comment, author, positiveFeedback, negativeFeedback, score, channel, publishedAt } = review;
    return (
        <ReviewContainerWrapper>
            <ReviewRow>
                <Score>{score}</Score>
                <Channel>{channel}</Channel>
            </ReviewRow>
            <ReviewRow>
                <ReviewTitle>{headline}</ReviewTitle>
            </ReviewRow>
            <ReviewRow>
                <ReviewBody>{comment}</ReviewBody>
            </ReviewRow>
            <ReviewRow>
                <Feedback positiveFeeback={positiveFeedback} negativeFeedback={negativeFeedback} />
            </ReviewRow>
            <ReviewRow>
                <Writername>{author}</Writername>
            </ReviewRow>
            <ReviewRow>
                <ReviewDate>Reviewed <Moment format="DD MMMM YYYY">{publishedAt}</Moment></ReviewDate>
            </ReviewRow>

            <ReviewSeparator></ReviewSeparator>

        </ReviewContainerWrapper>
    )
}

export default ReviewContainer;