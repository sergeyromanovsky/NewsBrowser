import React from 'react';
import style from './style.module.scss';

import ReactPaginate from 'react-paginate';
import Arrow from '../../assets/arrow.svg';

import { getNextData } from '../../ducks/main';
import { store } from '../..';

const handlePageClick = ({ selected }) => store.dispatch(getNextData(selected));

const renderArrow = (type) =>
    type === 'prev' ? (
        <>
            <Arrow />
            <span>prev</span>
        </>
    ) : (
        <>
            <span>next</span>
            <Arrow className={style.rightArrow} />
        </>
    );

const Pagination = ({ currPage, totalPages }) => (
    <ReactPaginate
        activeClassName={style.activePage}
        containerClassName={style.pagination}
        forcePage={currPage}
        marginPagesDisplayed={1}
        nextClassName="nav next"
        nextLabel={renderArrow()}
        pageCount={totalPages}
        pageRangeDisplayed={2}
        previousClassName="nav previous"
        previousLabel={renderArrow('prev')}
        onPageChange={handlePageClick}
    />
);

export default Pagination;
