import React from 'react';
import style from './style.module.scss';

const SideBar = ({ children }) => (
    <div className={style.wrapper}>
        <div className={style.innerWrapper}>{children}</div>
    </div>
);

export default SideBar;
