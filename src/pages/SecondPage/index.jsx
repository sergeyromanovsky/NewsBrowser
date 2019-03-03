import React from 'react';
import style from './style.module.scss';

import SideBarWrapper from '../../components/Layouts/SideBarWrapper';
import SideBar from './SideBar';
import SourceNewsList from './SourceNewsList';
import MainContentWrapper from '../../components/Layouts/MainContentWrapper';
import Header from './Header';

import { connect } from 'react-redux';
import { isMobile } from '../../helpers/common';

const SecondPage = ({ filtered, match, availableSorts }) => (
    <section className={style.wrapper}>
        <SideBarWrapper
            header={<Header availableSorts={availableSorts} selectedId={match.params.id} />}
        >
            <SideBar data={filtered} />
        </SideBarWrapper>
        <MainContentWrapper>
            {!isMobile && <Header availableSorts={availableSorts} selectedId={match.params.id} />}
            <SourceNewsList selectedId={match.params.id} />
        </MainContentWrapper>
    </section>
);

const mapStateToProps = ({ main, srcNews }) => ({
    filtered       : main.filtered,
    selectedSrc    : main.selectedSrc,
    availableSorts : srcNews.availableSorts
});

export default connect(mapStateToProps)(SecondPage);
