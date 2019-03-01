import { handleFetch } from '../helpers/fetch';
import { toggleNotificationAction } from './ui';

const GET_SELECTED_SRC_NEWS = '[SRC NEWS] GET SELECTED SRC NEWS';

const initialState = {
    selectedSrcNews : null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_SELECTED_SRC_NEWS:
            return {
                ...state,
                selectedSrcNews : payload
            };
        default:
            return state;
    }
};

const getSelectedSrcNewsAction = (payload) => ({ type: GET_SELECTED_SRC_NEWS, payload });

const cache = {};

export const getDetails = (query) => (dispatch) => {
    if (!cache[query]) {
        handleFetch(`articles?source=${query}`)
            .then((res) => {
                if (res.status === 'ok' && res.articles.length === 0) {
                    throw { type: 'warn', msg: 'Nothing was found' };
                } else if (res.status === 'ok') {
                    cache[query] = res.articles;
                    dispatch(getSelectedSrcNewsAction(res.articles));
                } else {
                    throw res;
                }
            })
            .catch(({ type, msg }) =>
                dispatch(toggleNotificationAction({ show: true, type, msg }))
            );
    } else {
        dispatch(getSelectedSrcNewsAction(cache[query]));
    }
};
