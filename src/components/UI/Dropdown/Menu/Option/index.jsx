import React from 'react';
import style from './style.module.scss';

const Option = ({ option, click }) => (
    <div onClick={click} className={style.wrapper}>
        <span className={style.option}>{option.label}</span>
    </div>
);

export default Option;
