import { initPomodoro } from './pomodoro.js';
import { initFlashcards } from './flashcards.js';
import { initTodos } from './todos.js';

// Tab switching functionality
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        
        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Show active content
        contents.forEach(content => {
            content.classList.remove('active');
            if (content.id === target) {
                content.classList.add('active');
            }
        });
    });
});

// Initialize all features
initPomodoro();
initFlashcards();
initTodos();