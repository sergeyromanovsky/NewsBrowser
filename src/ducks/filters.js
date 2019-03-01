import { toggleNotificationAction } from './ui';
import { getValue } from '../helpers/common';
import { updCurrentPageAction } from './main';

const BY_CATEGORY = '[ Filters ] BY CATEGORY';
const BY_LANG = '[ Filters ] BY LANG';
const BY_COUNTRY = '[ Filters ] BY COUNTRY';

const initialState = {
    category : [],
    language : [],
    country  : []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case BY_CATEGORY:
            return {
                ...state,
                category : payload
            };
        case BY_LANG:
            return {
                ...state,
                language : payload
            };
        case BY_COUNTRY:
            return {
                ...state,
                country : payload
            };
        default:
            return state;
    }
};

export const updCategoryFilter = (payload) => ({
    type    : BY_CATEGORY,
    payload : getValue(payload)
});
export const updLangFilter = (payload) => ({
    type    : BY_LANG,
    payload : getValue(payload)
});
export const updCountryFilter = (payload) => ({
    type    : BY_COUNTRY,
    payload : getValue(payload)
});

export const updFilters = (filter, val) => (dispatch) => {
    dispatch(updCurrentPageAction(0));
    switch (filter) {
        case 'category':
            dispatch(updCategoryFilter(val));
            break;
        case 'lang':
            dispatch(updLangFilter(val));
            break;
        case 'country':
            dispatch(updCountryFilter(val));
            break;
    }
};
