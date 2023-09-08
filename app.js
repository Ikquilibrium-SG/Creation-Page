const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]')
const currentTime = document.querySelector('[data-testid="currentUTCTime"]')

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const today = new Date()
const dayOfWeek = daysOfWeek[today.getUTCDay()]
const time = today.getTime()

currentDayOfTheWeek.textContent = dayOfWeek
currentTime.textContent = time