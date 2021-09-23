var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue'
	}
})

var vFor = new Vue({
	el: '#vFor',
	data: {
		dias: [
			{ id: 0, dia: 'domingo' },
			{ id: 1, dia: 'segunda' },
			{ id: 2, dia: 'terça' },
			{ id: 3, dia: 'quarta' },
			{ id: 4, dia: 'quinta' },
			{ id: 5, dia: 'sexta' },
			{ id: 6, dia: 'sábado' }
		]
	}
})
