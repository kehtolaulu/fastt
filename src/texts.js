const texts = [
    "Lorem Ipsum has been the industry's standard.",
    "It has survived not only five centuries.",
    "It is a long established fact that a reader will be...",
    "Lorem Ipsum is simply dummy text of some industry.",
    "life life life life life life life life life life life",
    "this this this this this this this this this this this"
];

const getRandomText = () => {
    return texts[Math.floor(Math.random() * texts.length)];
};

export default getRandomText;
