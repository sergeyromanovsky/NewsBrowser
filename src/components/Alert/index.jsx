import React from 'react';
import style from './style.module.scss';

const Alert = ({ data: { type, msg } }) => (
    <div className={style.wrapper}>
        <h4 className={style[type]}>{msg}</h4>
    </div>
);

export default Alert;
