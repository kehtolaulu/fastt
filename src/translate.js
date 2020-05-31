const words = {
    "en": {
        "speed": "Speed",
        "speedUnit": "chars/min",
        "accuracy": "Accuracy"
    },
    "ru": {
        "speed": "Скорость",
        "speedUnit": "зн/мин",
        "accuracy": "Точность"
    }
}

const getWord = (word, language) => {
    return words[language][word];
};

export default getWord;
