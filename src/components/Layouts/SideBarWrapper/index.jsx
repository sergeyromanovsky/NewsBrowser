import React from 'react';
import style from './style.module.scss';

const SideBar = ({ children }) => <div className={style.wrapper}>{children}</div>;

export default SideBar;
