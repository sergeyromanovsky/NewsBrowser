import React, { useState } from 'react';
import style from './style.module.scss';
import Dimmer from './Dimmer';

import { isMobile } from '../../../../helpers/common';

const NewsItem = ({ item: { description, url, name, id, sortBysAvailable } }) => {
    const [isHovered, setHovered] = useState(false);

    // fix mobile hover issue
    const events = {};
    if (isMobile) {
        events.onClick = () => setHovered(true);
        events.onBlur = () => setHovered(false);
    } else {
        events.onMouseEnter = () => setHovered(true);
        events.onMouseLeave = () => setHovered(false);
    }

    return (
        <div className={style.wrapper} {...events} tabIndex="1">
            {isHovered ? (
                <Dimmer
                    availableSorts={sortBysAvailable}
                    description={description}
                    id={id}
                    name={name}
                    url={url}
                />
            ) : (
                <div className={`${style.item} ${style.flex}`}>
                    <span className={style.name}>{name}</span>
                </div>
            )}
        </div>
    );
};

export default NewsItem;
