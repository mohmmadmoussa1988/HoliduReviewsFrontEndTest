import React from 'react';
import Feedback from '../components/Feedback/Feedback.component'

export default {
    title: 'Components/Feedback',
    component: Feedback,
    argTypes: {
        positiveFeedback: {control: 'text', defaultValue: 'Positive feedback'},
        negativeFeedback: {control: 'text', defaultValue: 'Negative feedback'}
    }
};

const Template = (args) => <Feedback
    positiveFeeback={args['positiveFeedback']}
    negativeFeedback={args['negativeFeedback']}/>;

export const Default = Template.bind({});
