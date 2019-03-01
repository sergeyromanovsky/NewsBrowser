import React, { useEffect } from 'react';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import Translate from '../components/Animation/Translate';

import { Switch, Route } from 'react-router-dom';
import { getData } from '../ducks/main';
import { connect } from 'react-redux';
import Alert from '../components/Alert';

const App = ({ dispatch, notification }) => {
    useEffect(() => {
        dispatch(getData());
    }, []);

    return (
        <>
            <Switch>
                <Route exact component={FirstPage} path="/" />
                <Route component={SecondPage} path="/second/:id" />
            </Switch>
            <Translate in={notification.show}>
                <Alert data={notification} />
            </Translate>
        </>
    );
};

const mapStateToProps = ({ ui }) => ({ notification: ui.notification });

export default connect(mapStateToProps)(App);
