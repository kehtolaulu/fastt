const texts = {
    "en": ["Lorem Ipsum has been the industry's standard.",
        "It has survived not only five centuries.",
        "It is a long established fact that a reader will be...",
        "Lorem Ipsum is simply dummy text of some industry.",
        "life life life life life life life life life life life",
        "this this this this this this this this this this this"],
    "ru": ["Привет, это текст на русском языке.",
        "Но лучше печатать на английском...",
        "Лорем ипсум - классический текст-«рыба» (условный)...",
        "Это бессмысленный текст-заполнитель",
        "Является искажённым отрывком из философского трактата..",
        "обнаружение сходства атрибутируется Ричарду МакКлинтоку"]
};

const getRandomText = (language = "en") => {
    return texts[language][Math.floor(Math.random() * texts[language].length)];
};

export default getRandomText;
