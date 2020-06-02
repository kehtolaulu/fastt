import distance from './distance';

const accuracy = (text, targetText) => {
    return 100 - 100 * distance(text, targetText) / targetText.length;
};

export default accuracy;
