//SpreadOperator vs Rest Operator

/** The spread operator, denoted by three consecutive dots(...) is primarily used for expanding iterables like arrays into individual elements.
 * This operator allows us to effciently merge, copy or pass array elements to functions without explicity iterating through them.*/

const arr = [1, 2, 3];
const newArr = [...arr, 4, 5, 6]; //integrate the arr with newArr
console.log(newArr);

//Combining Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; //[1,2,3,4,5,6]
console.log("combined array", combined);

//Passing Arguments to functions

function sum(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
const result = sum(...nums);
console.log("result: ", result);

//copying arrays
const original = [1, 2, 3];
const copied = [...original];
copied.push("4");
console.log("copied", copied); //Copied values
console.log("original", original); // Orginal values

/** While the spread operator expands elements, the rest operator condenses them into a single entity within function parameters or array destructuring.
 *  It collects remaining elements into a designated variable, facilitating flexible function definitions and array manipulation. */

//Array Destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log("rest", rest); // encapsulates the remaining elements
console.log("first", first); // first element in the array
console.log("second", second); // second element in the array

//Handling Variable-Length Function Arguments
function add(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("Add", add(1, 2, 3, 4, 5)); // 15
console.log("Add", add(10, 20)); //30
