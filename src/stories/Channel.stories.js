import React from 'react';

import Channel from "../components/Channel/Channel.component";

export default {
    title: 'Components/Channel',
    component: Channel,
    argTypes: {
        image: {
            control: {
                type: 'select',
                options: [
                    'AIRBNB',
                    'HOLIDU',
                    'BOOKINGCOM'
                ],
            }
        }
    },
};

const Template = (args) => <Channel>{args['image'] || 'AIRBNB'}</Channel>;

export const Default = Template.bind({});
