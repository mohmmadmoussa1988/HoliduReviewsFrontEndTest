import React from 'react';
import { ChannelWrapper } from './Channel.styles';
import AIRBNB from '../../assets/AIRBNB.svg';
import HOLIDU from '../../assets/HOLIDU.svg';
import BOOKINGCOM from '../../assets/BOOKINGCOM.svg';
const Channel = ({ children }) => {
    const Image = (children) => {
        switch (children) {
            case 'AIRBNB': return AIRBNB;
            case 'HOLIDU': return HOLIDU;
            case 'BOOKINGCOM': return BOOKINGCOM;
            default:
                return '';
        }
    }
    return (
        <>
            <ChannelWrapper><img src={Image(children)} alt={children} /></ChannelWrapper>
        </>
    )
}

export default Channel;