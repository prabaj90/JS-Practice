/** A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible 
 until the moment the computer completely initializes it with a value.

 > A block is a pair of braces ({...}) used to group multiple statements.
 > Initialization occurs when you assign an initial value to a variable. 
 
 Suppose you attempt to access a variable before its complete initialization. In such a case, JavaScript will throw a ReferenceError.
 */
/*
 console.log(bestFood); //reference error
 let bestFood = "🐔 Briyani"; 
 
 */

 let bestSeaFood;
 console.log(bestSeaFood); // undefined
 bestSeaFood = "🍤🦐";
 console.log(bestSeaFood); // shows output


 console.log(bestDessert); //undefined instead of reference error
 var bestDessert = "falooda";
 console.log(bestDessert); //output


 /** When you run the snippet above, you will see that the first console.log statement will return undefined.

The console.log statement successfully returned a value (undefined) because JavaScript automatically assigns undefined to a hoisted var variable.

In other words, when the computer hoists a var variable, it automatically initializes the variable with the value undefined.

In contrast, JavaScript does not initialize a let (or const) variable with any value whenever it hoists the variable. Instead, the variable remains dead and inaccessible.

Therefore, a let (or const) variable’s TDZ ends when JavaScript fully initializes it with the value specified during its declaration.

However, a var variable’s TDZ ends immediately after its hoisting—not when the variable gets fully initialized with the value specified during its declaration. */