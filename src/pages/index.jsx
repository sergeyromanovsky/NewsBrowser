import React, { useEffect, lazy, Suspense } from 'react';

import Translate from '../components/Animation/Translate';
import Alert from '../components/Alert';
import Loader from '../components/UI/Loader';

import { Switch, Route } from 'react-router-dom';
import { getData } from '../ducks/main';
import { connect } from 'react-redux';

// Code-splitting
const FirstPage = lazy(() =>
    // min delay, prevent flicker
    Promise.all([import('./FirstPage'), new Promise((resolve) => setTimeout(resolve, 500))]).then(
        ([moduleExports]) => moduleExports
    )
);

const SecondPage = lazy(() =>
    // min delay, prevent flicker
    Promise.all([import('./SecondPage'), new Promise((resolve) => setTimeout(resolve, 500))]).then(
        ([moduleExports]) => moduleExports
    )
);

const App = ({ dispatch, notification }) => {
    useEffect(() => {
        dispatch(getData());
    }, []);

    return (
        <>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route exact component={FirstPage} path="/" />
                    <Route component={SecondPage} path="/second/:id" />
                </Switch>
            </Suspense>
            <Translate in={notification.show}>
                <Alert data={notification} />
            </Translate>
        </>
    );
};

const mapStateToProps = ({ ui }) => ({ notification: ui.notification });

export default connect(mapStateToProps)(App);
