import { SET_PRESSED_BUTTON, RELEASE_BUTTON } from '../constants/actionTypes';

export const setPressedButton = (code) => ({
    type: SET_PRESSED_BUTTON,
    code
});

export const releaseButton = (code) => ({
    type: RELEASE_BUTTON,
    code
});
