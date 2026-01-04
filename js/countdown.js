const targetDate = new Date('2026-11-27T00:00:00Z').getTime();

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const countdownEl = document.getElementById('countdown');

const previous = { days: '', hours: '', minutes: '', seconds: '' };

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        countdownEl.innerHTML = '<h2 style="font-size: 3rem; text-shadow: 0 0 30px #4f0080; color: #fff;">Black Friday Deals Are Live!<br>Happy Shopping! 🛒</h2>';
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
    
    if (days !== previous.days) { daysEl.classList.add('animate'); previous.days = days; }
    if (hours !== previous.hours) { hoursEl.classList.add('animate'); previous.hours = hours; }
    if (minutes !== previous.minutes) { minutesEl.classList.add('animate'); previous.minutes = minutes; }
    if (seconds !== previous.seconds) { secondsEl.classList.add('animate'); previous.seconds = seconds; }

    setTimeout(() => {
        daysEl.classList.remove('animate');
        hoursEl.classList.remove('animate');
        minutesEl.classList.remove('animate');
        secondsEl.classList.remove('animate');
    }, 600);
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); 
