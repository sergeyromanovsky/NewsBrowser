import React, { useState } from 'react';
import style from './style.module.scss';

import { headerOptions } from '../../../helpers/options';
import { store } from '../../..';
import { getDetails } from '../../../ducks/srcNews';

const Header = ({ availableSorts, selectedId }) => {
    const [activeFilter, setActiveFilter] = useState('top');

    const handleClick = (filter) => {
        store.dispatch(getDetails(selectedId, filter));
        setActiveFilter(filter);
    };
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <p className={style.sortBy}>Sort by :</p>
                <div className={style.sortItemWrapper}>
                    {headerOptions.map((filter) => {
                        const isAvailable = availableSorts.includes(filter);
                        return (
                            <span
                                key={filter}
                                // prettier-ignore
                                className={`${style.sortItem} ${!isAvailable ? style.disabled : ''} ${activeFilter === filter ? style.active : ''}`}
                                onClick={() => (isAvailable ? handleClick(filter) : undefined)}
                            >
                                {filter}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Header;
