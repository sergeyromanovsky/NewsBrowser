import React, { useEffect } from 'react';
import style from './style.module.scss';

import { connect } from 'react-redux';
import { getDetails } from '../../../ducks/srcNews';
import NewsItem from './Item';

const list = (arr) => arr.map((item) => <NewsItem key={item.url} item={item} />);

const SourceNews = ({ data, selectedId, dispatch }) => {
    useEffect(() => {
        dispatch(getDetails(selectedId));
    }, [selectedId]);

    return <div>{data && list(data)}</div>;
};

const mapStateToProps = ({ srcNews }) => ({
    data : srcNews.selectedSrcNews
});

export default connect(mapStateToProps)(SourceNews);
