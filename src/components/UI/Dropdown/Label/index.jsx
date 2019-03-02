import React from 'react';
import style from './style.module.scss';

import Cross from '../../../../assets/cross.svg';

const Label = ({ option, remove, index }) => (
    <div className={style.wrapper}>
        <span className={style.label}>{option.label}</span>
        <Cross onClick={() => remove(option, index)} />
    </div>
);

export default Label;
