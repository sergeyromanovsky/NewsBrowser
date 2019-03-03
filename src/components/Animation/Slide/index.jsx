import React from 'react';
import './style.scss';
import 'react-slidedown/lib/slidedown.css';

import { SlideDown } from 'react-slidedown';

const Slide = ({ children, open }) => (
    <SlideDown className="slide">{open ? children : null}</SlideDown>
);

export default Slide;
