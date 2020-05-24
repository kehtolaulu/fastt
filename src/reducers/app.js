import { SET_PRESSED_BUTTON, RELEASE_BUTTON } from '../constants/actionTypes';

const pressed = (state = [], action) => {
    if (!action) {
        return state;
    }
    switch (action.type) {
        case SET_PRESSED_BUTTON:
            return [
                ...state,
                action.code
            ];
        case RELEASE_BUTTON:
            return state.filter(key => key !== action.code);

        default:
            return state;
    }
};

export default pressed;
