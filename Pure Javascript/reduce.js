let grades = [3.4, 5.4, 8.2, 9.1, 6.5, 7.4, 6.8]

//the reduce method allows us to accumulate something
//about all elements in the array.
//It can be used to sum all elements, multiply them, and other uses.

//for example, let's calculate the mean grade of the array "grades"
let sumOfGrades = grades.reduce(function (accumulator, currentValue) {
	return accumulator + currentValue
})

let mean = sumOfGrades / grades.length

console.log(mean.toFixed(2))
/*outputs:
6.69 (the real mean value, trust me, I tested)
*/
