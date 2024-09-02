//pass_by_value_vs_pass_by_reference

/*
Primitive data-types:
 string, integer or number, boolean, undefined, null  --> Generally primitive will pass or assign by value, it will create copy of that, changes won't impact to original.

 Non-Primitive data-types:
 Object, Array --> In case of non-primitive's it will pass or assign by refernce, so it will share the actual memory itself. Changes will be impact in both original and copied also.
 */


 //Primitive
 let str = 'hello';
 let num = 123;

 //non-primitive

 let arr=["John","Alex","David"];
 let obj={
    id:1,
    name:"Peter"
 };


 //Pass by Value - only on primitive type

 let str2 = str; //Assigning the str value to str2 but not the memory location, str2 will create new memory location, so str2 changes wont impact to str. 
 str2=str2+' there';
 console.log(str2); //hello there
 console.log(str); //hello


//pass by reference - only on non-primitive type

let arr2 = arr; // Assigned the arr memory location so, changes will impact in both places. It means arr2 will not create new memory location instead it will refer the arr memory location.
arr2.push("peter");
console.log(arr2);  //[ 'John', 'Alex', 'David', 'peter' ]
console.log(arr);  //[ 'John', 'Alex', 'David', 'peter' ]