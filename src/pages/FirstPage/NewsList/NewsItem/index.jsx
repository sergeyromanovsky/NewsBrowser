import React, { useState } from 'react';
import style from './style.module.scss';
import Dimmer from './Dimmer';

const NewsItem = ({ item: { description, url, name, id } }) => {
    const [isHovered, setHovered] = useState(false);

    return (
        <div
            className={style.wrapper}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {isHovered ? (
                <Dimmer description={description} id={id} name={name} url={url} />
            ) : (
                <div className={`${style.item} ${style.flex}`}>
                    <span className={style.name}>{name}</span>
                </div>
            )}
        </div>
    );
};

export default NewsItem;
