import {
    SET_PRESSED_BUTTON,
    RELEASE_BUTTON,
    SET_SHIFT,
    RELEASE_SHIFT,
    CHANGE_TEXT,
    NEXT_TEXT
} from '../constants/actionTypes';
import { combineReducers } from 'redux';
import getRandomText from '../texts';

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

const text = (state = getRandomText(), action) => {
    if (!action) {
        return state;
    }
    switch (action.type) {
        case NEXT_TEXT:
            return getRandomText();
        default:
            return state;
    }
};

const isTextRight = (state = false, action) => {
    if (!action) {
        return state;
    }
    switch (action.type) {
        case CHANGE_TEXT:
            return action.text === action.targetText.slice(0, action.text.length);
        default:
            return state;
    }
};

const app = combineReducers({
    pressed, shift, text, isTextRight
});

export default app;
