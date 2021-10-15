export const questions = [
    {
        title: 'What is the capital of Romania?',
        options: [
            { text: 'Brasov', isCorrect: false },
            { text: 'Sibiu', isCorrect: false },
            { text: 'Bucharest', isCorrect: true },
            { text: 'Oradea', isCorrect: false }
        ]
    },
    {
        title: 'Which company owns the iPhone?',
        options: [
            { text: 'Apple', isCorrect: true },
            { text: 'Microsoft', isCorrect: false },
            { text: 'IBM', isCorrect: false },
            { text: 'Amazon', isCorrect: false }
        ]
    },
    {
        title: 'What is the tallest mountain on Earth?',
        options: [
            { text: 'Kangchenjunga', isCorrect: false },
            { text: 'Everest', isCorrect: true },
            { text: 'Lhotse', isCorrect: false },
            { text: 'Manaslu', isCorrect: false }
        ]
    },
    {
        title: 'What is the biggest animal in the world?',
        options: [
            { text: 'The gigant squid', isCorrect: false },
            { text: 'The giraffe', isCorrect: false },
            { text: 'The great white', isCorrect: false },
            { text: 'The blue whale', isCorrect: true }
        ]
    },
    {
        title: 'What is 1+1?',
        options: [
            { text: '2', isCorrect: true },
            { text: '3', isCorrect: false },
            { text: '6', isCorrect: false },
            { text: '10', isCorrect: false }
        ]
    }
]

export const questionsLength = questions.length;

export const shuffleAnswers = (id) => {
    const rdnOptions = questions[id].options;
    let currentIndex = rdnOptions.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = rdnOptions[currentIndex];
        rdnOptions[currentIndex] = rdnOptions[randomIndex];
        rdnOptions[randomIndex] = temporaryValue;
    }
    return rdnOptions;
}