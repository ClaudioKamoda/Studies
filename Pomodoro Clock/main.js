feather.replace()

const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const breakLabel = document.getElementById('break')
const sessionTopLabel = document.getElementById('session-number')
const breakTopLabel = document.getElementById('break-active')

let secondsSTATE = 0
let minutesSTATE = 25
let secondsBreakSTATE = 0
let minutesBreakSTATE = 5
let isBreak = false
let sessionNumber = 1

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
	breakLabel.classList.remove('show')
	if (isBreak) {
		secondsCounter = secondsBreakSTATE
		minutesCounter = minutesBreakSTATE
		breakTopLabel.classList.add('active')
		sessionTopLabel.classList.remove('active')
	} else {
		sessionTopLabel.innerHTML = `SESSION ${sessionNumber}`
		sessionNumber++
		breakTopLabel.classList.remove('active')
		sessionTopLabel.classList.add('active')
	}

	if (interval && !isBreak) return

	interval = setInterval(function () {
		playCounter()
	}, 1000)
}

function playCounter() {
	let timeOver = secondsCounter == 0 && minutesCounter == 0
	if (timeOver) {
		if (isBreak) {
			resetTimer()
		} else {
			breakLabel.classList.add('show')
			updateTimer(minutesBreakSTATE, secondsBreakSTATE)
			isBreak = true
		}
		return clearInterval(interval)
	}

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

function resetTimer() {
	breakLabel.classList.remove('show')
	isBreak = false
	secondsCounter = secondsSTATE
	minutesCounter = minutesSTATE
	updateTimer(minutesCounter, secondsCounter)
	pauseTimer()
}

function setTimer(min) {
	sessionNumber = 1
	secondsSTATE = 0
	minutesSTATE = min
	minutesBreakSTATE = Math.floor(min / 5) //(50-10, 25-5, 15-3, 5-1, 1-20s)
	secondsBreakSTATE = minutesBreakSTATE > 0 ? 0 : 20

	breakTopLabel.classList.remove('active')
	sessionTopLabel.classList.add('active')
	sessionTopLabel.innerHTML = `SESSION ${sessionNumber}`
	resetTimer()
}
