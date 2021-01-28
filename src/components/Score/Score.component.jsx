import React from 'react';
import { ScoreWrapper, CurrentScore, TotalScore } from './Score.styles';

const Score = ({ children }) => {
    return (
        <ScoreWrapper>
            <CurrentScore>{children}</CurrentScore>/<TotalScore>5</TotalScore>
        </ScoreWrapper>
    )
}

export default Score;