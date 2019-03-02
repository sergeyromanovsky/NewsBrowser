import { handleFetch } from '../helpers/fetch';
import { toggleNotificationAction } from './ui';

const GET_SELECTED_SRC_NEWS = '[SRC NEWS] GET SELECTED SRC NEWS';
const SET_AVAILABLE_SORTS = '[ SRC NEWS ] SET AVAILABLE SORTS';
const CLEAN_UP = '[SRC NEWS] RESET SELECTED SRC NEWS';

const initialState = {
    selectedSrcNews : null,
    availableSorts  : ['top']
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_SELECTED_SRC_NEWS:
            return {
                ...state,
                selectedSrcNews : payload
            };
        case CLEAN_UP:
            return {
                ...state,
                selectedSrcNews : null
            };
        case SET_AVAILABLE_SORTS:
            return {
                ...state,
                availableSorts : payload
            };
        default:
            return state;
    }
};

const getSelectedSrcNewsAction = (payload) => ({ type: GET_SELECTED_SRC_NEWS, payload });
export const setAvailableSorts = (payload) => ({ type: SET_AVAILABLE_SORTS, payload });

export const cleanSelectedNews = () => ({ type: CLEAN_UP });

const cache = {};

export const getDetails = (query, sortBy = 'top') => (dispatch) => {
    if (!cache[query]) {
        handleFetch(`articles?source=${query}&sortBy=${sortBy}`)
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
