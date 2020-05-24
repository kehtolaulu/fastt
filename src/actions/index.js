import {
    SET_PRESSED_BUTTON,
    RELEASE_BUTTON,
    SET_SHIFT,
    RELEASE_SHIFT
} from '../constants/actionTypes';

export const setPressedButton = (code) => ({
    type: SET_PRESSED_BUTTON,
    code
});

export const releaseButton = (code) => ({
    type: RELEASE_BUTTON,
    code
});

export const setShift = () => ({
    type: SET_SHIFT
});

export const releaseShift = () => ({
    type: RELEASE_SHIFT
});
