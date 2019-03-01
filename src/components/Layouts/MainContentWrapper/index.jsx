import React from 'react';
import style from './style.module.scss';

const MainContentWrapper = ({ children }) => (
    <section className={style.wrapper}>{children}</section>
);

export default MainContentWrapper;
