const counters = document.querySelectorAll(".counter")
const updateSpeed = 20; // time in ms
const updateCount = 100; // ticks

counters.forEach(counter => {
    counter.innerText = '0';
    updateCounter(counter)
})

function updateCounter(counter) {
    const count = parseInt(counter.dataset.target)
    let runningCount = 0;
    const countPerUpdate = count / updateCount

    const interval = setInterval(() => {
        runningCount += countPerUpdate
        counter.innerText = Math.floor(runningCount)
        if (runningCount >= count) {
            clearInterval(interval)
        }
    }, updateSpeed);

}