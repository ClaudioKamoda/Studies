let grades = [3.4, 5.4, 8.2, 9.1, 6.5, 7.4, 6.8]

//the filter method allows us to select elements in an array
//given a condition defined by a callback function passed as parameter.
//returns a new array with the filter applied

let approved = grades.filter(function (grade) {
	return grade > 6
})

console.log(approved)
/*outputs:
[ 8.2, 9.1, 6.5, 7.4, 6.8 ]
*/
