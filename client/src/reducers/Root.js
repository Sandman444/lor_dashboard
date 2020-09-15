import React from 'react';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './index';

export default ({children, initialState = {}}) => {
    const store = createStore(
        reducers,
        initialState,

    )
}