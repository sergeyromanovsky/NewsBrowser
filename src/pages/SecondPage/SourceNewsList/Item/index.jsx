import React from 'react';
import style from './style.module.scss';

const NewsItem = ({ item: { author } }) => <div>{author}</div>;

export default NewsItem;
