import React, { memo } from 'react';
import style from './style.module.scss';

import { store } from '../../../..';
import { setSelectedSrcAction } from '../../../../ducks/main';

const Item = memo(({ item, isActive }) => (
    <div
        className={isActive ? style.active : ''}
        onClick={() => store.dispatch(setSelectedSrcAction(item))}
    >
        {item.id}
    </div>
));

export default Item;
