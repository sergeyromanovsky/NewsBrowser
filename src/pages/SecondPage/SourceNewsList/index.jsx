import React, { useEffect } from 'react';
import style from './style.module.scss';

import NewsItem from './Item';

import { connect } from 'react-redux';
import { getDetails, cleanSelectedNews } from '../../../ducks/srcNews';

const renderList = (arr) => arr.map((item) => <NewsItem key={item.url} item={item} />);

const SourceNews = ({ data, selectedId, dispatch }) => {
    useEffect(() => {
        dispatch(getDetails(selectedId));

        return () => {
            dispatch(cleanSelectedNews());
        };
    }, [selectedId]);

    return <div className={style.gridWrapper}>{data && renderList(data)}</div>;
};

const mapStateToProps = ({ srcNews }) => ({
    data : srcNews.selectedSrcNews
});

export default connect(mapStateToProps)(SourceNews);
