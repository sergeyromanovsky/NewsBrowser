import React from 'react';
import style from './style.module.scss';

const Alert = ({ data: { type, msg } }) => (
    <div className={style.wrapper}>
        {type}
        {msg}
    </div>
);

export default Alert;
