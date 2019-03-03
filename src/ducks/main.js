import { handleFetch } from '../helpers/fetch';
import { toggleNotificationAction } from './ui';
import { compareDate } from '../helpers/common';

const GET_DATA = '[ Main ] GET DATA';
const SET_FILTERED = '[ Main ] SET FILTERED';
const SET_PAGINATED = '[ Main ] SET PAGINATED';
const UPD_TOTAL_PAGES = '[ Main ] UPD TOTAL PAGES';
const UPD_CURR_PAGE = '[ Main ] UPD CURR PAGE';

export const perPage = 6;

const initialState = {
    initial    : [],
    filtered   : [],
    paginated  : [],
    totalPages : null,
    currPage   : 0
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_DATA:
            return {
                ...state,
                initial : payload
            };
        case SET_FILTERED:
            return {
                ...state,
                filtered : payload
            };
        case SET_PAGINATED:
            return {
                ...state,
                paginated : payload
            };

        case UPD_TOTAL_PAGES:
            return {
                ...state,
                totalPages : payload
            };
        case UPD_CURR_PAGE:
            return {
                ...state,
                currPage : payload
            };

        default:
            return state;
    }
};

export const getDataAction = (payload) => ({ type: GET_DATA, payload });
export const setFilteredAction = (payload) => ({ type: SET_FILTERED, payload });
export const setPaginatedAction = (payload) => ({ type: SET_PAGINATED, payload });
export const updTotalPagesAction = (payload) => ({ type: UPD_TOTAL_PAGES, payload });
export const updCurrentPageAction = (payload) => ({ type: UPD_CURR_PAGE, payload });

export const updFiltered = (payload) => (dispatch) => {
    dispatch(setFilteredAction(payload));
    dispatch(setPaginatedAction(payload.slice(0, perPage)));
    dispatch(updTotalPagesAction(Math.ceil(payload.length / perPage)));
};

export const getNextData = (page) => (dispatch, getState) => {
    dispatch(updCurrentPageAction(page));
    const { filtered } = getState().main;
    // get next paginated items
    const updArr = filtered.slice((page + 1) * perPage - perPage, (page + 1) * perPage);
    dispatch(setPaginatedAction(updArr));
};

// creators

export const getData = () => (dispatch) =>
    compareDate()
        ? // if twenty minutes past get new data, else get data from localStorage
          handleFetch(`sources?language=en`)
              .then((res) => {
                  if (res.status === 'ok') {
                      dispatch(getDataAction(res.sources));
                      dispatch(updFiltered(res.sources));
                      localStorage.setItem('data', JSON.stringify(res.sources));
                      localStorage.setItem('timestamp', +new Date());
                  } else {
                      throw res;
                  }
              })
              .catch((e) =>
                  dispatch(toggleNotificationAction({ show: true, type: 'error', msg: e.message }))
              )
        : (() => {
              dispatch(getDataAction(JSON.parse(localStorage.getItem('data'))));
              dispatch(updFiltered(JSON.parse(localStorage.getItem('data'))));
          })();
