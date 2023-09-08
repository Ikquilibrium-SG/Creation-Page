const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]')
const currentTime = document.querySelector('[data-testid="currentUTCTime"]')

document.addEventListener('DOMContentLoaded', function() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const today = new Date()
    const dayOfWeek = daysOfWeek[today.getUTCDay()]
    const milliseconds = today.getUTCMilliseconds()

    currentDayOfTheWeek.textContent = dayOfWeek
    currentTime.textContent = milliseconds
});

