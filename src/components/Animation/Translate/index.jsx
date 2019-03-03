import React from 'react';
import './style.scss';

import Backdrop from '../../UI/Backdrop';

import { CSSTransition } from 'react-transition-group';

const Transform = ({ in: inProp, children, unmountOnExit = true }) => (
    <CSSTransition classNames="alert" in={inProp} timeout={400} unmountOnExit={unmountOnExit}>
        <Backdrop>{children}</Backdrop>
    </CSSTransition>
);
export default Transform;
