import React from 'react';
import style from './style.module.scss';

import SourceItem from './Item';

import { Link } from 'react-router-dom';

const itemList = (arr) => arr.map((item) => <SourceItem key={item.id} item={item} />);

const SecondPageSidebar = ({ data }) => (
    <div className={style.wrapper}>
        <h3 className={style.heading}>Filtered Sources</h3>
        <i className={style.back}>
            <Link to="/" />
        </i>
        {itemList(data)}
    </div>
);

export default SecondPageSidebar;
