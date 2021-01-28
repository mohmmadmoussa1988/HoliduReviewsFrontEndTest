import React from 'react';
import { TopHeaderWrapper, IDWrapper, NameWrapper } from './TopHeader.styles';

const TopHeader = ({ children }) => {
    return (
        <>

            <TopHeaderWrapper>
                <IDWrapper key={'IDWrapper'}>ID: 091021</IDWrapper>
                <NameWrapper key={'NameWrapper'}>La Casa de las Flores</NameWrapper>
            </TopHeaderWrapper>

        </>
    )
}

export default TopHeader;