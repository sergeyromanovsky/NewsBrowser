import React from 'react';
import './style.scss';

const Loader = () => (
    <div className="lds-roller-wrapper">
        <div className="lds-roller">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);

export default Loader;
