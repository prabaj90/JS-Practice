//map_filter_reduce

// map function - used to transform an array from that will create a new array
//This map function will be the Higher Order Function, which means it will take a function as Argument or return as function

const arr = [1, 2, 3, 4, 5];
const output = arr.map((x) => x * 2);
console.log(output); //[ 2, 4, 6, 8, 10 ]  Newly created array with transformed values
console.log(arr); //[ 1, 2, 3, 4, 5 ] Orginal Array without impact

//filter function - used to filter the values inside the array
const arrFilter = [1, 2, 3, 4, 5];
const outputFilter = arrFilter.filter((x) => x % 2 == 0);
console.log(outputFilter); //[ 2, 4 ] newly created array with filtered values
console.log(arrFilter); //[ 1, 2, 3, 4, 5 ] Original array without impact 

//reduce function - used to find the sum of array or max from array

const arrReduce = [1,2,3,4,5];
//acc- accumulator, curr -current
const outputReduce = arr.reduce((acc,curr)=>{
    acc= acc+curr;
    return acc;
},0)
console.log(outputReduce); // 15 - total count
console.log(arrReduce); // original array wihtout impact