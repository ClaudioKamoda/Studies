let grades = [3.4, 5.4, 8.2, 9.1, 6.5, 7.4, 6.8]

//forEach is a method that gives us
//a faster way to iterate the elements of the array.
//it receive a callback function as a parameter with 3 set parameters
//them being the "element value", the "element index" and the own array it iterates.

grades.forEach(function (grade, index, array) {
	console.log(`grade ${index + 1}: ${grade}`)
})
/*outputs:
grade 1: 3.4
grade 2: 5.4
grade 3: 8.2
grade 4: 9.1
grade 5: 6.5
grade 6: 7.4
grade 7: 6.8
*/

//the forEach method doesn't change the original array value
grades.forEach(function (grade, index, array) {
	grade += 1 //nothing will change
})

console.log(grades)
/*outputs:
[
  3.4, 5.4, 8.2,
  9.1, 6.5, 7.4,
  6.8
]
*/

//even if we set a new array, because if returns "undefined" by default
let bonusGrades = grades.forEach(function (grade, index, array) {
	grade = grade + 1 //nothing will change
})

console.log(bonusGrades)
/*output:
undefined
*/
