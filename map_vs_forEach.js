//They almost look identical but there are some difference between them, but before jumping, let us know what are map() and forEach().

/* forEach - method allows you to execute a callback function by iterating through each element in an array
  Always remember that it doesn't return anything and if you try to get the value it will be "Undefined".
*/

let numberArray = [1,2,3,4,5];

let returnValue = numberArray.forEach((num)=> num*2);

console.log(numberArray); //[1,2,3,4,5]

console.log(returnValue); // undefined



/*map - returns a new array with the transformed elements*/

let mapArray = [1,2,3,4,5];

let returnMapArray = mapArray.map((num)=>num*2);

console.log(mapArray); // [1,2,3,4,5]

console.log(returnMapArray); //[2,4,6,8,10]



/* Few major differences are below

forEach:

> return is undefined
> original array will not modified
> new array is not created
> Chaining is not applicable as it always returns undefined


map:

> newArray will be returned
> original array will not modified
> map method is chainable as return a new array. 

*/