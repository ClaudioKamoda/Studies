let items = [
	{ name: 'Belgium', points: 3, difference: 3, gFor: 8 },
	{ name: 'France', points: 6, difference: 3, gFor: 6 },
	{ name: 'Brazil', points: 6, difference: 5, gFor: 8 },
	{ name: 'Italy', points: 3, difference: 3, gFor: 10 }
]

function calculateGroup(a, b) {
	//first criteria
	if (a.points > b.points) return -1
	if (a.points < b.points) return 1
	//second criteria
	if (a.difference > b.difference) return -1
	if (a.difference < b.difference) return 1
	//third criteria
	if (a.gFor > b.gFor) return -1
	if (a.gFor < b.gFor) return 1
	return 0
}

console.log(items.sort(calculateGroup))
/*outputs:
[
  { name: 'Brazil', points: 6, difference: 5, gFor: 8 },
  { name: 'France', points: 6, difference: 3, gFor: 6 },
  { name: 'Italy', points: 3, difference: 3, gFor: 10 },
  { name: 'Belgium', points: 3, difference: 3, gFor: 8 }
]
*/
