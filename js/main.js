const count = document.querySelector('.count');

// setting launch date to 28.12.2020
const launchDate = new Date("Dec 28, 2020 00:00:00").getTime();

// updating secs
const seconds = setInterval(() => {
    // date and time in ms
    const rn = new Date().getTime(); //rn = right now [na na na na na]

    //time remaining till launch date in ms
    const remainingTime = launchDate - rn;

    // calculating time [kabooom!]
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // displaying the results
    count.innerHTML = `<div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${secs}<span>Seconds</span></div>`;

    // if launchDate is reached
    if (remainingTime < 0) {
        // Stop countdown
        clearInterval(seconds);
        // Style and output text
        count.style.color = '#00bcd4';
        count.innerHTML = 'Launched!';
    }
}, 1000);