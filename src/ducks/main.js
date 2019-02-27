import { handleFetch } from '../helpers/fetch';

const NEXT_STEP = 'NEXT_STEP';

const initialState = {
    currStep : 1
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
};

export const nextStep = () => ({ type: NEXT_STEP });

// creators
