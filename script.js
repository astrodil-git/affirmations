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
    "You deserve a snack, Cutie, you’re doing amazing."
];

const pharmacyQuizzes = [
    {
        question: "Which feature of smart infusion pumps most prevents dosing errors?",
        options: [
            "A) Colorful display",
            "B) Built-in drug library with dose limits",
            "C) Rechargeable battery",
            "D) Wireless connectivity"
        ],
        correctAnswer: "B"
    },
    {
        question: "Linaclotide is indicated for…",
        options: [
            "A) IBS with constipation (IBS-C)",
            "B) Ulcerative colitis",
            "C) GERD",
            "D) Crohn’s disease"
        ],
        correctAnswer: "A"
    },
    {
        question: "A solution labeled 5% w/v has how many grams per 100 mL?",
        options: [
            "A) 0.5 g",
            "B) 5 g",
            "C) 50 g",
            "D) 500 g"
        ],
        correctAnswer: "B"
    },
    {
        question: "Meq = mmol × valence. If you have 2 mmol of Ca²⁺, that’s…",
        options: [
            "A) 2 meq",
            "B) 4 meq",
            "C) 1 meq",
            "D) 8 meq"
        ],
        correctAnswer: "B"
    },
    {
        question: "Positive predictive value measures…",
        options: [
            "A) True positives / (true positives + false positives)",
            "B) True negatives / (true negatives + false negatives)",
            "C) Sensitivity / specificity",
            "D) Prevalence × sensitivity"
        ],
        correctAnswer: "A"
    }
];

const encouragementWordElement = document.getElementById('encouragement-word');
const newWordBtn = document.getElementById('new-word-btn');

const welcomeScreen = document.getElementById('welcome-screen');
const letsGoBtn = document.getElementById('lets-go-btn');
const mainContent = document.getElementById('main-content');

const quizArea = document.getElementById('quiz-area');
const quizQuestionElement = document.getElementById('quiz-question');
const quizOptionsElement = document.getElementById('quiz-options');
const feedbackArea = document.getElementById('feedback-area');
const feedbackMessageElement = document.getElementById('feedback-message');
const retryBtn = document.getElementById('retry-btn');
const confettiArea = document.getElementById('confetti-area');

const contentFlow = ['pepTalk', 'quiz', 'loveNote', 'reminder'];
let currentContentIndex = 0;
let currentQuiz = null;

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordsOfEncouragement.length);
    return wordsOfEncouragement[randomIndex];
}

function displaySweetPepTalk() {
    const randomIndex = Math.floor(Math.random() * sweetPepTalks.length);
    encouragementWordElement.textContent = sweetPepTalks[randomIndex];
    encouragementWordElement.style.display = 'block';
    quizArea.style.display = 'none';
    feedbackArea.style.display = 'none';
    confettiArea.style.display = 'none';
    newWordBtn.style.display = 'block';
}

function displayLoveNote() {
    const randomIndex = Math.floor(Math.random() * loveNotes.length);
    encouragementWordElement.textContent = loveNotes[randomIndex];
    encouragementWordElement.style.display = 'block';
    quizArea.style.display = 'none';
    feedbackArea.style.display = 'none';
    confettiArea.style.display = 'none';
    newWordBtn.style.display = 'block';
}

function displayReminderBubble() {
    const randomIndex = Math.floor(Math.random() * reminderBubbles.length);
    encouragementWordElement.textContent = reminderBubbles[randomIndex];
    encouragementWordElement.style.display = 'block';
    quizArea.style.display = 'none';
    feedbackArea.style.display = 'none';
    confettiArea.style.display = 'none';
    newWordBtn.style.display = 'block';
}

function displayQuiz() {
    quizArea.style.display = 'block';
    encouragementWordElement.style.display = 'none';
    feedbackArea.style.display = 'none';
    confettiArea.style.display = 'none';
    newWordBtn.style.display = 'none';

    const randomIndex = Math.floor(Math.random() * pharmacyQuizzes.length);
    currentQuiz = pharmacyQuizzes[randomIndex];

    quizQuestionElement.textContent = currentQuiz.question;
    quizOptionsElement.innerHTML = '';
    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.dataset.option = String.fromCharCode(65 + index); // A, B, C, D
        button.addEventListener('click', checkAnswer);
        quizOptionsElement.appendChild(button);
    });
}

function checkAnswer(event) {
    const selectedOption = event.target.dataset.option;
    quizOptionsElement.querySelectorAll('button').forEach(button => {
        button.disabled = true; // Disable buttons after selection
    });

    if (selectedOption === currentQuiz.correctAnswer) {
        feedbackMessageElement.textContent = "Correct! Well done!";
        feedbackMessageElement.className = 'correct';
        showConfetti();
        retryBtn.style.display = 'none';
        newWordBtn.style.display = 'block'; // Allow to proceed to next content
    } else {
        feedbackMessageElement.textContent = `Oops… but I still love you! The correct answer was ${currentQuiz.correctAnswer}.`;
        feedbackMessageElement.className = 'incorrect';
        retryBtn.style.display = 'block';
        newWordBtn.style.display = 'none'; // Prevent proceeding until correct or retry
    }
    feedbackArea.style.display = 'block';
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
    } else if (contentType === 'quiz') {
        displayQuiz();
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

retryBtn.addEventListener('click', () => {
    // Allow user to try the same quiz again
    displayQuiz(); 
}); 