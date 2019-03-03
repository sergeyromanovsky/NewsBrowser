import React from 'react';
import style from './style.module.scss';

import { store } from '../../..';
import { toggleNotificationAction } from '../../../ducks/ui';

const handleClick = () => store.dispatch(toggleNotificationAction(false));

const Backdrop = ({ children, click = handleClick }) => (
    <div className={style.wrapper} onClick={click}>
        {children}
    </div>
);

export default Backdrop;
