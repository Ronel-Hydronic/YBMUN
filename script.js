// Countdown Timer Script
const countdown = document.getElementById('countdown');
const eventDate = new Date('October 19, 2024 00:00:00').getTime();

const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // When the countdown is finished
    if (distance < 0) {
        clearInterval(interval);
        countdown.innerHTML = "The event has started!";
    }
}, 1000);
