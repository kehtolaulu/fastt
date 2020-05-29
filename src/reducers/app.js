import {
    SET_PRESSED_BUTTON,
    RELEASE_BUTTON,
    SET_SHIFT,
    RELEASE_SHIFT,
    CHANGE_TEXT
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

const text = (state = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.") => {
    return state;
};

const isTextRight = (state = false, action) => {
    if (!action) {
        return state;
    }
    switch (action.type) {
        case CHANGE_TEXT:
            return action.text === text().slice(0, action.text.length);
        default:
            return state;
    }
};

const app = combineReducers({
    pressed, shift, text, isTextRight
});

export default app;
