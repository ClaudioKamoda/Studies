//pageYOffset increases when scrolling down
let previousPosition = window.pageYOffset
let navbar = document.getElementById('navbar')

window.onscroll = () => {
	let currentPosition = window.pageYOffset

	if (currentPosition < previousPosition) navbar.style.top = '0'
	else navbar.style.top = '-50px'

	previousPosition = currentPosition
}
