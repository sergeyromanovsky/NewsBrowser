import React, { useState } from 'react';
import style from './style.module.scss';

import Arrow from '../../../assets/arrow.svg';

import { headerOptions } from '../../../helpers/options';
import { store } from '../../..';
import { getDetails } from '../../../ducks/srcNews';
import { Link } from 'react-router-dom';

const Header = ({ availableSorts, selectedId }) => {
    const [activeFilter, setActiveFilter] = useState('top');

    const handleClick = (e, filter) => {
        e.stopPropagation();
        store.dispatch(getDetails(selectedId, filter));
        setActiveFilter(filter);
    };
    return (
        <div className={style.wrapper}>
            <div className={style.back}>
                <Arrow height={24} viewBox="0 0 10 10" width={24} />
                <Link to="/">back to main page</Link>
            </div>
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
                                onClick={(e) => (isAvailable ? handleClick(e, filter) : undefined)}
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
