import React from 'react';
import style from './style.module.scss';

import SideBarWrapper from '../../components/Layouts/SideBarWrapper';
import SideBar from './SideBar';
import SourceNewsList from './SourceNewsList';
import MainContentWrapper from '../../components/Layouts/MainContentWrapper';

import { connect } from 'react-redux';

const SecondPage = ({ filtered, match }) => (
    <section className={style.wrapper}>
        <SideBarWrapper>
            <SideBar data={filtered} />
        </SideBarWrapper>
        <MainContentWrapper>
            <SourceNewsList selectedId={match.params.id} />
        </MainContentWrapper>
    </section>
);

const mapStateToProps = ({ main }) => ({
    filtered    : main.filtered,
    selectedSrc : main.selectedSrc
});

export default connect(mapStateToProps)(SecondPage);
