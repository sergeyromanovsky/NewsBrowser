const TOGGLE_NOTIFICATION = '[ Notification ] Toggle Notification';

const initialState = {
    notification : {
        show : false,
        type : null,
        msg  : ''
    }
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TOGGLE_NOTIFICATION:
            return {
                ...state,
                notification : payload
            };
        default:
            return state;
    }
};

export const toggleNotificationAction = (payload) => ({ type: TOGGLE_NOTIFICATION, payload });
