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

const sweetPepTalks = [
    "Hey Pookie, you’re smarter than you think and stronger than you feel. Go get ’em!",
    "My Cutie, every question is just another chance to shine. I believe in you!",
    "You’ve got this, Baby Bear—one step at a time, one answer at a time. 💪",
    "My Love, remember: progress, not perfection. Keep going!",
    "Smile, Baby, because you make my heart proud every day."
];

const loveNotes = [
    "I’m so proud of you, Baby—keep crushing it!",
    "Nothing can stop my smart-eyed bear! 🐻",
    "Your hard work blows me away, My Love."
];

const reminderBubbles = [
    "Drink water, Pookie, and take a quick break!",
    "You deserve a snack, cutie pie, you’re doing amazing."
];

const welcomeScreen = document.getElementById('welcome-screen');
const letsGoBtn = document.getElementById('lets-go-btn');
const mainContent = document.getElementById('main-content');
const encouragementWordElement = document.getElementById('encouragement-word');
const newWordBtn = document.getElementById('new-word-btn');

const confettiArea = document.getElementById('confetti-area');

const contentFlow = ['pepTalk', 'loveNote', 'reminder'];
let currentContentIndex = 0;

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordsOfEncouragement.length);
    return wordsOfEncouragement[randomIndex];
}

function displaySweetPepTalk() {
    const randomIndex = Math.floor(Math.random() * sweetPepTalks.length);
    encouragementWordElement.textContent = sweetPepTalks[randomIndex];
    encouragementWordElement.style.display = 'block';
    confettiArea.style.display = 'none';
    newWordBtn.style.display = 'block';
    newWordBtn.textContent = ''; // Clear existing text
    newWordBtn.classList.add('heart-button');
}

function displayLoveNote() {
    const randomIndex = Math.floor(Math.random() * loveNotes.length);
    encouragementWordElement.textContent = loveNotes[randomIndex];
    encouragementWordElement.style.display = 'block';
    confettiArea.style.display = 'none';
    newWordBtn.style.display = 'block';
    newWordBtn.textContent = ''; // Clear existing text
    newWordBtn.classList.add('heart-button');
}

function displayReminderBubble() {
    const randomIndex = Math.floor(Math.random() * reminderBubbles.length);
    encouragementWordElement.textContent = reminderBubbles[randomIndex];
    encouragementWordElement.style.display = 'block';
    confettiArea.style.display = 'none';
    newWordBtn.style.display = 'block';
    newWordBtn.textContent = ''; // Clear existing text
    newWordBtn.classList.add('heart-button');
}

function showConfetti() {
    confettiArea.style.display = 'block';
    confettiArea.innerHTML = '';
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'confetti-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
        confettiArea.appendChild(particle);
    }
    setTimeout(() => {
        confettiArea.style.display = 'none';
        confettiArea.innerHTML = '';
    }, 1000); // Remove confetti after 1 second
}

function displayNextContent() {
    const contentType = contentFlow[currentContentIndex];
    if (contentType === 'pepTalk') {
        displaySweetPepTalk();
    } else if (contentType === 'loveNote') {
        displayLoveNote();
    } else if (contentType === 'reminder') {
        displayReminderBubble();
    }
    currentContentIndex = (currentContentIndex + 1) % contentFlow.length;
}

function displayWelcomeScreen() {
    welcomeScreen.style.display = 'flex';
    mainContent.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', displayWelcomeScreen);

letsGoBtn.addEventListener('click', () => {
    welcomeScreen.style.display = 'none';
    mainContent.style.display = 'block';
    displayNextContent(); // Start the content flow
});

newWordBtn.addEventListener('click', displayNextContent); 
