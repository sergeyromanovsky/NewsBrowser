import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.scss';

import App from './pages';
import configureStore from './store';

export const store = configureStore();

render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App} path="/" />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
