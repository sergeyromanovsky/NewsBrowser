import React, { useState, useEffect } from 'react';
import style from './style.module.scss';

import Label from './Label';
import Menu from './Menu';
import Arrow from '../../../assets/arrow.svg';
import Slide from '../../Animation/Slide';

const Another = ({ initial, placeholder, change, title }) => {
    const [options, setOptions] = useState(initial);
    const [selected, setSelected] = useState([]);
    const [showMenu, setMenu] = useState(false);

    useEffect(() => {
        change(selected);
    }, [selected]);

    const handleMenuClick = (obj, index, e) => {
        e.stopPropagation();
        const updOptions = [...options];
        updOptions.splice(index, 1);

        setSelected((prevState) => [...prevState, obj]);

        setOptions(updOptions);
    };

    const handleLabelClick = (obj, index) => {
        const updSelected = [...selected];
        updSelected.splice(index, 1);

        setOptions((prevState) => [...prevState, obj]);
        setSelected(updSelected);
    };

    const handleHideMenu = () => setMenu(false);

    return (
        <div className={style.wrapper} tabIndex="1" onBlur={handleHideMenu}>
            <span className={style.title}>{title} :</span>
            <div className={style.input} onClick={() => setMenu((prevState) => !prevState)}>
                <div className={style.placeholderWrapper}>
                    <span className={style.placeholder}>{placeholder}</span>
                    <Arrow className={`${style.arrow} ${showMenu ? style.isOpen : ''}`} />
                </div>
                <Slide open={showMenu}>{<Menu click={handleMenuClick} options={options} />}</Slide>
            </div>
            <div className={style.labelWrapper}>
                {selected.map((option, index) => (
                    <Label
                        key={option.value}
                        index={index}
                        option={option}
                        remove={handleLabelClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default Another;
