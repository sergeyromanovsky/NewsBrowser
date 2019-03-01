import React from 'react';
import style from './style.module.scss';

import SourceItem from './Item';

const itemList = (arr, selectedId) =>
    arr.map((item) => <SourceItem key={item.id} isActive={item.id === selectedId} item={item} />);

const SecondPageSidebar = ({ data, selectedId }) => <div>{itemList(data, selectedId)}</div>;

export default SecondPageSidebar;
