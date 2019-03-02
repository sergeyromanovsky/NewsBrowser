import React from 'react';
import style from './style.module.scss';

import NewsItem from './NewsItem';
import MainContentWrapper from '../../../components/Layouts/MainContentWrapper';
import Pagination from '../../../components/Pagination';

const NewsList = ({ data, totalPages, currPage }) => (
    <MainContentWrapper>
        <div className={style.wrapper}>
            <section className={style.gridWrapper}>
                {data.map((item) => (
                    <NewsItem key={item.id} item={item} />
                ))}
            </section>
            {totalPages > 1 && <Pagination currPage={currPage} totalPages={totalPages} />}
        </div>
    </MainContentWrapper>
);

export default NewsList;
