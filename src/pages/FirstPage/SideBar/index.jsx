import React, { memo } from 'react';
import style from './style.module.scss';

import Dropdown from '../../../components/UI/Dropdown';

import { categoryOptions, langOptions, countryOptions } from '../../../helpers/options';
import { store } from '../../..';
import { updFilters } from '../../../ducks/filters';

const FirstPageSideBar = memo(() => (
    <div className={style.wrapper}>
        <h3 className={style.heading}>Filters</h3>
        <Dropdown
            change={(val) => store.dispatch(updFilters('category', val))}
            options={categoryOptions}
            placeholder="Select 1 or more categories"
            title="Categories"
        />
        <Dropdown
            change={(val) => store.dispatch(updFilters('lang', val))}
            options={langOptions}
            placeholder="Select 1 or more countries"
            title="Country"
        />
        <Dropdown
            change={(val) => store.dispatch(updFilters('country', val))}
            options={countryOptions}
            placeholder="Select 1 or more languages"
            title="Language"
        />
    </div>
));

export default FirstPageSideBar;
