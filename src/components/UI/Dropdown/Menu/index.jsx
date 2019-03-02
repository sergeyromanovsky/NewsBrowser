import React, { memo } from 'react';
import style from './style.module.scss';

import Option from './Option';

const Menu = memo(({ options, click }) => (
    <div className={style.menu}>
        {options.map((o, index) => (
            <Option key={o.value} click={(e) => click(o, index, e)} option={o} />
        ))}
    </div>
));

export default Menu;
