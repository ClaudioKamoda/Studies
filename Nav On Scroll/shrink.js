let navbar = document.getElementById('navbar')
let logo = document.getElementById('logo')

window.onscroll = () => {
	if (window.pageYOffset == 0) {
		navbar.classList.add('expand')
		logo.classList.add('expand')
	} else {
		navbar.classList.remove('expand')
		logo.classList.remove('expand')
	}
}
