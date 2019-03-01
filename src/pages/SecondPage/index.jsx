import React from 'react';
import style from './style.module.scss';

import SideBarWrapper from '../../components/Layouts/SideBarWrapper';
import SideBar from './SideBar';
import MainContentWrapper from '../../components/Layouts/MainContentWrapper';

import { connect } from 'react-redux';

const SecondPage = ({ filtered, selectedSrc }) => (
    <section className={style.wrapper}>
        <SideBarWrapper>
            <SideBar data={filtered} selectedId={selectedSrc.id} />
        </SideBarWrapper>
        <MainContentWrapper>asd</MainContentWrapper>
    </section>
);

const mapStateToProps = ({ main }) => ({
    filtered    : main.filtered,
    selectedSrc : main.selectedSrc
});

export default connect(mapStateToProps)(SecondPage);
