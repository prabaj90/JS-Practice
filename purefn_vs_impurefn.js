// Pure Function vs Impure Function

/** Pure Function: This function always returns the same output as given 
the same input parameters in otherwords it is always predictable. It don't affect the state of application or others part of the code.*/ 

function purefn(value){
    return value+100;
}

console.log(purefn(3)); // 103
console.log(purefn(5)); //105




/**Impure Function: This can change the state of application.
 In other words impure function are unpredictable */
function impurefn(){
    return Math.floor(Math.random() *4);
}

console.log(impurefn()) //Not predictable