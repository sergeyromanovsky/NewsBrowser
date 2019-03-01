import React, { useEffect } from 'react';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

import { Switch, Route } from 'react-router-dom';
import { getData } from '../ducks/main';
import { store } from '..';

const App = () => {
    useEffect(() => {
        store.dispatch(getData());
    }, []);

    return (
        <Switch>
            <Route exact component={FirstPage} path="/" />
            <Route component={SecondPage} path="/second/" />
        </Switch>
    );
};

export default App;
