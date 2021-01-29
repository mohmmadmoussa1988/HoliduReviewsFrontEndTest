import React from 'react';
import Loading from '../components/loading/loading.component';
import store from "../redux/store";
import {Provider} from "react-redux";

export default {
    title: 'Components/Loading',
    component: Loading,
};

// To update the global state SHOW_LOADING
const Template = (args) =>
    <Provider store={store}>
        <Loading/>
    </Provider>

export const Default = Template.bind({});
