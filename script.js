const wordsOfEncouragement = [
    "You are amazing!",
    "Keep up the great work!",
    "Believe in yourself!",
    "You've got this!",
    "Stay strong!",
    "You're doing great!",
    "Never give up!",
    "You are capable of anything!",
    "Shine bright!",
    "Be proud of who you are!"
];

const encouragementWordElement = document.getElementById('encouragement-word');
const newWordBtn = document.getElementById('new-word-btn');

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordsOfEncouragement.length);
    return wordsOfEncouragement[randomIndex];
}

function displayNewWord() {
    encouragementWordElement.textContent = getRandomWord();
}

// Display a word when the page loads
document.addEventListener('DOMContentLoaded', displayNewWord);

// Display a new word when the button is clicked
newWordBtn.addEventListener('click', displayNewWord); 