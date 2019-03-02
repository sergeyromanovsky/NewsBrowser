import React from 'react';
import style from './style.module.scss';

import { NavLink } from 'react-router-dom';
import { store } from '../../../..';
import { setAvailableSorts } from '../../../../ducks/srcNews';

const handleClick = (arr) => store.dispatch(setAvailableSorts(arr));

const Item = ({ item }) => (
    <NavLink
        activeClassName={style.active}
        className={style.link}
        to={`/second/${item.id}`}
        onClick={() => handleClick(item.sortBysAvailable)}
    >
        {item.name}
    </NavLink>
);

export default Item;
