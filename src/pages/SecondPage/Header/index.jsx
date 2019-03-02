import React from 'react';
import style from './style.module.scss';
import { headerOptions } from '../../../helpers/options';

const Header = ({ availableSorts }) => (
    <div className={style.wrapper}>
        <div className={style.header}>
            <p className={style.sortBy}>Sort by :</p>

            <div className={style.sortItemWrapper}>
                {headerOptions.map((o) => (
                    <span
                        key={o}
                        className={`${style.sortItem} ${
                            !availableSorts.includes(o) ? style.disabled : ''
                        }`}
                    >
                        {o}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

export default Header;
