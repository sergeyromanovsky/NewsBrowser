import React from 'react';
import style from './style.module.scss';

import SourceItem from './Item';

const itemList = (arr) => arr.map((item) => <SourceItem key={item.id} item={item} />);

const SecondPageSidebar = ({ data }) => <div>{itemList(data)}</div>;

export default SecondPageSidebar;
