import React from 'react';
import style from './style.module.scss';

import { NavLink } from 'react-router-dom';

const Item = ({ item }) => (
    <div>
        <NavLink activeClassName={style.active} to={`/second/${item.id}`}>
            {item.id}
        </NavLink>
    </div>
);

export default Item;
