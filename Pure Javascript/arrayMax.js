//Find the maximum element of an array
function arrayMax(input) {
	let max = input[0]
	for (let i in input) {
		if (input[i] > max) {
			max = input[i]
		}
	}
	console.log(max)
	return
}

arrayMax([1, 2, 3])
arrayMax([-10, -2, -11])
arrayMax([10, 1000, 100])

/*outputs:
3
-2
1000
*/
