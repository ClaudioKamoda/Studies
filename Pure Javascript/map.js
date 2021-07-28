let grades = [3.4, 5.4, 8.2, 9.1, 6.5, 7.4, 6.8]

//the map method gives us a new array with the same lenght
//as the original, but with the results of the callback function used as parameter

let bonusGrades = grades.map(function (grade) {
	return grade + 0.5
})

//it can also be written like this:
//bonusGrades = grades.map(grade => grade + 0.5)

console.log(grades)
console.log(bonusGrades)
/* outputs:
[
  3.4, 5.4, 8.2,
  9.1, 6.5, 7.4,
  6.8
]
[
  3.9, 5.9, 8.7,
  9.6,   7, 7.9,
  7.3
]
*/
