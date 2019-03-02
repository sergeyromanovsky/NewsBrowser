import React from 'react';
import style from './style.module.scss';
import styleItem from '../style.module.scss';

import ClampLines from 'react-clamp-lines';

import { Link } from 'react-router-dom';
import { store } from '../../../../..';
import { setAvailableSorts } from '../../../../../ducks/srcNews';

const handleClick = (arr) => store.dispatch(setAvailableSorts(arr));

const Dimmer = ({ name, description, url, id, availableSorts }) => (
    <div className={`${style.dimmer} ${styleItem.item}`}>
        <span className={`${styleItem.name} ${style.name}`}>{name}</span>
        {/* For multiline trunkating */}
        <ClampLines
            buttons={false}
            className={style.description}
            ellipsis="..."
            lines={5}
            text={description}
        />
        <div className={style.links}>
            <a className={style.resourse} href={url} rel="noopener noreferrer" target="_blank">
                Open Resourse
            </a>
            <Link
                className={style.explore}
                to={`/second/${id}`}
                onClick={() => handleClick(availableSorts)}
            >
                Explore News
            </Link>
        </div>
    </div>
);

export default Dimmer;
