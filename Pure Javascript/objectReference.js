let a = { name: 'Hello' }
let b = a
//Reference copy of the object address

console.log(a)
console.log(b)

/*outputs:
{ name: 'Hello' }
{ name: 'Hello' }
*/

a = null
//b still got the reference but a doesn't hold it anymore

console.log(a)
console.log(b)

/*outputs:
null
{ name: 'Hello' }
*/
