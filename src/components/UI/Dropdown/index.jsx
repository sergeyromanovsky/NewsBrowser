import React from 'react';
import style from './style.module.scss';

import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';

const Dropdown = ({ options, change, title, placeholder }) => (
    <>
        <span className={style.title}>{title} :</span>
        <Select
            isMulti
            closeMenuOnSelect={false}
            components={makeAnimated()}
            options={options}
            onChange={change}
            className="react-select-container"
            classNamePrefix="react-select"
            placeholder={placeholder}
        />
    </>
);

export default Dropdown;
