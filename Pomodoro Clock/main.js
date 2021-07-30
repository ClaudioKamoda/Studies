feather.replace()

const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const resetButton = document.getElementById('reset')

let secondsSTATE = 0
let minutesSTATE = 25

let secondsCounter = 0
let minutesCounter = 25
let interval

function updateTimer(minutesContent, secondsContent) {
	minutes.innerHTML =
		minutesContent < 10 ? `0${minutesContent}` : minutesContent
	seconds.innerHTML =
		secondsContent < 10 ? `0${secondsContent}` : secondsContent
}

updateTimer(25, 0)

function startTimer() {
	interval = setInterval(function () {
		playCounter()
	}, 1000)
}

function playCounter() {
	let timeOver = secondsCounter == 0 && minutesCounter == 0
	if (timeOver) return clearInterval(interval)

	if (secondsCounter == 0) {
		secondsCounter = 59
		minutesCounter--
	} else {
		secondsCounter--
	}

	updateTimer(minutesCounter, secondsCounter)
}

function pauseTimer() {
	clearInterval(interval)
	interval = undefined
}

function resetTimer(minutesCounter, secondsCounter) {
	secondsCounter = 0
	minutesCounter = 25
	updateTimer(minutesCounter, secondsCounter)
}

function set50() {
	secondsCounter = 0
	minutesCounter = 50
	updateTimer(minutesCounter, secondsCounter)
}
