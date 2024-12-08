export function initFlashcards() {
    const flashcard = document.querySelector('.flashcard');
    const prevBtn = document.getElementById('prev-card');
    const nextBtn = document.getElementById('next-card');
    const addBtn = document.getElementById('add-card');

    let cards = [
        { question: 'Click to add a question', answer: 'Click to add an answer' }
    ];
    let currentCard = 0;

    function updateCard() {
        const front = flashcard.querySelector('.flashcard-front p');
        const back = flashcard.querySelector('.flashcard-back p');
        front.textContent = cards[currentCard].question;
        back.textContent = cards[currentCard].answer;
    }

    function addCard() {
        const question = prompt('Enter the question:');
        const answer = prompt('Enter the answer:');
        
        if (question && answer) {
            cards.push({ question, answer });
            currentCard = cards.length - 1;
            updateCard();
        }
    }

    function nextCard() {
        if (currentCard < cards.length - 1) {
            currentCard++;
            updateCard();
        }
    }

    function prevCard() {
        if (currentCard > 0) {
            currentCard--;
            updateCard();
        }
    }

    // Event listeners
    flashcard.addEventListener('click', () => {
        flashcard.classList.toggle('flipped');
    });

    addBtn.addEventListener('click', addCard);
    nextBtn.addEventListener('click', nextCard);
    prevBtn.addEventListener('click', prevCard);

    // Initialize first card
    updateCard();
}