import React from 'react';

import BackgroundImage from "../components/BackgroundImage/BackgroundImage.component";

export default {
    title: 'Components/BackgroundImage',
    component: BackgroundImage,
};

const Template = (args) => <BackgroundImage {...args} />;

export const Default = Template.bind({});
