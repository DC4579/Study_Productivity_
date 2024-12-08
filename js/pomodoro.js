export function initPomodoro() {
    const timerDisplay = document.querySelector('.timer-display');
    const startBtn = document.getElementById('start-timer');
    const pauseBtn = document.getElementById('pause-timer');
    const resetBtn = document.getElementById('reset-timer');

    let timeLeft = 25 * 60; // 25 minutes in seconds
    let timerId = null;
    let isRunning = false;

    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            timerId = setInterval(() => {
                timeLeft--;
                updateDisplay();
                
                if (timeLeft === 0) {
                    clearInterval(timerId);
                    isRunning = false;
                    alert('Pomodoro session completed!');
                    timeLeft = 25 * 60;
                    updateDisplay();
                }
            }, 1000);
        }
    }

    function pauseTimer() {
        clearInterval(timerId);
        isRunning = false;
    }

    function resetTimer() {
        clearInterval(timerId);
        isRunning = false;
        timeLeft = 25 * 60;
        updateDisplay();
    }

    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);

    // Initialize display
    updateDisplay();
}