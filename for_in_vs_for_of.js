/** Both for...in and for...of statements iterate over something.
 * The main difference between them is in what they iterate over. */

const iterable = [3, 4, 5];
console.log("-----------------------------------------");
console.log("run for in");
for (const i in iterable) {
  console.log(i); // It will log the key's of the array elements
}

const obj = { a: 1, b: 2, c: 3 };

for (const i in obj) {
  console.log(i); // prints the keys in object a,b,c
  console.log(i, ":", obj[i]); // print the value of the key in object
}

console.log("-----------------------------------------");
console.log("run for of");
// of -> can be used to iterate the values, cannot iterate the obj.
for (const i of iterable) {
  console.log(i); // prints the value
}
