import React, { useState } from 'react';
import style from './style.module.scss';

import FilterIcon from '../../../UI/FilterIcon';
import Backdrop from '../../../UI/Backdrop';
import Close from '../../../../assets/cross.svg';

const MobileSidebar = ({ children, header }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <FilterIcon click={() => setShow(true)} header={header} />
            <div className={`${style.wrapper} ${show ? style.show : style.hide}`}>
                <Close
                    className={style.close}
                    height={24}
                    viewBox="0 0 10 10"
                    width={24}
                    onClick={() => setShow(false)}
                />
                {children}
            </div>
            {show && <Backdrop click={() => setShow(false)} />}
        </>
    );
};

export default MobileSidebar;
