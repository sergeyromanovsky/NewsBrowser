import React from 'react';
import style from './style.module.scss';

import dayjs from 'dayjs';
import defaultImg from '../../../../assets/defaultNews.jpg';

const NewsItem = ({ item: { author, urlToImage, publishedAt, title, url } }) => (
    <div className={style.wrapper}>
        <div className={style.imgWrapper}>
            <img alt="newsImage" className={style.img} src={urlToImage || defaultImg} />
        </div>
        {publishedAt && (
            <span className={style.smallText}>{dayjs(publishedAt).format('DD MMM YYYY')}</span>
        )}

        <a href={url} rel="noopener noreferrer" target="_blank">
            <h4 className={style.title}>{title}</h4>
        </a>
        <span className={style.smallText}>{author}</span>
    </div>
);

export default NewsItem;
