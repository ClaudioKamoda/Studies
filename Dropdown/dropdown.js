let dropContent = document.getElementById('clickDrop')
let dropButton = document.getElementById('dropButton')

dropButton.addEventListener('click', () => {
	dropContent.classList.toggle('active')
})
