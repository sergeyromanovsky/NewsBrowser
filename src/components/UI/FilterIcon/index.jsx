import React from 'react';
import style from './style.module.scss';

import Icon from '../../../assets/filterIcon.svg';

const FilterIcon = ({ click, header }) => (
    <div className={style.wrapper}>
        <div className={style.filterWrapper} onClick={click}>
            <Icon />
            <span>Filter</span>
        </div>
        {header}
    </div>
);

export default FilterIcon;
