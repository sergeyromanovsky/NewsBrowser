import React from 'react';
import style from './style.module.scss';

import MobileSidebar from './Mobile';
import { isMobile } from '../../../helpers/common';

const SideBar = ({ children, header }) => isMobile ? (
        <MobileSidebar header={header}>{children}</MobileSidebar>
    ) : (
        <div className={style.wrapper}>{children}</div>
    );
export default SideBar;
