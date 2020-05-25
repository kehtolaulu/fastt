import {
    SET_PRESSED_BUTTON,
    RELEASE_BUTTON,
    SET_SHIFT,
    RELEASE_SHIFT
} from '../constants/actionTypes';
import { combineReducers } from 'redux';

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

const shift = (state = false, action) => {
    if (!action) {
        return state;
    }
    switch (action.type) {
        case SET_SHIFT:
            return true;
        case RELEASE_SHIFT:
            return false;
        default:
            return state;
    }
};

const app = combineReducers({
    pressed, shift
});

export default app;
