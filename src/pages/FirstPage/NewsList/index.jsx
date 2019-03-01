import React from 'react';
import style from './style.module.scss';

import NewsItem from './NewsItem';
import ReactPaginate from 'react-paginate';
import MainContentWrapper from '../../../components/Layouts/MainContentWrapper';

import { getNextData } from '../../../ducks/main';

const NewsList = ({ data, dispatch, totalPages, currPage }) => {
    const handlePageClick = ({ selected }) => dispatch(getNextData(selected));

    return (
        <MainContentWrapper>
            <section className={style.gridWrapper}>
                {data.map((item) => (
                    <NewsItem key={item.id} item={item} />
                ))}
            </section>
            {totalPages > 1 && (
                <ReactPaginate
                    key={currPage}
                    activeClassName={style.activePage}
                    containerClassName={style.pagination}
                    forcePage={currPage}
                    marginPagesDisplayed={1}
                    nextLabel={<i>Next</i>}
                    pageCount={totalPages}
                    pageRangeDisplayed={3}
                    previousLabel={<i>Prev</i>}
                    onPageChange={handlePageClick}
                />
            )}
        </MainContentWrapper>
    );
};

export default NewsList;
