export function initPomodoro() {
    const timerDisplay = document.querySelector('.timer-display');
    const startBtn = document.getElementById('start-timer');
    const pauseBtn = document.getElementById('pause-timer');
    const resetBtn = document.getElementById('reset-timer');
    const customTimeInput = document.getElementById('custom-time');
    const intervalInput = document.getElementById('interval-time');
    const sessionNameInput = document.getElementById('session-name');
    const saveSessionBtn = document.getElementById('save-session');

    let timeLeft = 25 * 60; // 25 minutes in seconds by default
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
                    timeLeft = getIntervalTime() * 60; // Reset to interval time
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
        timeLeft = getCustomTime() * 60;
        updateDisplay();
    }

    function getCustomTime() {
        const customTime = parseInt(customTimeInput.value);
        return isNaN(customTime) ? 25 : customTime; // Default to 25 if input is invalid
    }

    function getIntervalTime() {
        const intervalTime = parseInt(intervalInput.value);
        return isNaN(intervalTime) ? 5 : intervalTime; // Default to 5 if input is invalid
    }

    function saveSession() {
        const sessionName = sessionNameInput.value || 'Unnamed Session';
        const completedSessions = JSON.parse(localStorage.getItem('completedSessions')) || [];
        completedSessions.push({ name: sessionName, time: new Date().toLocaleString() });
        localStorage.setItem('completedSessions', JSON.stringify(completedSessions));
        alert('Session saved!');
    }

    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);
    saveSessionBtn.addEventListener('click', saveSession);

    // Initialize display
    updateDisplay();
}
