let currentSlide = 0
let slides = document.getElementsByClassName('slide')

function startSlideshow() {
	slides[currentSlide].style.display = 'block'
}

function changeSlide(index) {
	currentSlide += index

	if (currentSlide > slides.length - 1) currentSlide = 0
	if (currentSlide < 0) currentSlide = slides.length - 1

	console.log(currentSlide)

	for (let slide of slides) {
		slide.style.display = 'none'
	}

	slides[currentSlide].style.display = 'block'
}

startSlideshow()
