/** Call( ): The call() method invokes a function with a given 'this' value and arguments provided one by one. 
 * This means that we can call any function, and explicitly specify what 'this' should reference within the calling function. */

var friend1 = {firstName:'Prabakaran', lastName:'Jayapalan'};
var friend2 = {firstName:'P', lastName:'J'};

function invite(greeting1, greeting2){
    console.log(greeting1+' '+this.firstName+' '+this.lastName+', '+greeting2);
}

invite.call(friend1, 'Hey','Whats Up?'); // Hey Prabakaran Jayapalan, Whats Up?
invite.call(friend2, 'Hey','Whats Up?'); // Hey P J, Whats Up?

/** Apply(): Invokes the function and allows you to pass in arguments as an Array*/

invite.apply(friend1,['hey','whats up?']); // Hey Prabakaran Jayapalan, Whats Up?
invite.apply(friend2,['hey','whats up?']); // Hey P J, Whats Up?

/**Bind(): returns a new function, allowing you to pass in an array and any number of arguments*/

var inviteFriend1 = invite.bind(friend1);
var inviteFriend2 = invite.bind(friend2);

inviteFriend1('hello', 'how are you?'); // Hey Prabakaran Jayapalan, Whats Up?
inviteFriend2('hello', 'how are you?'); // Hey P J, Whats Up?

/**  Call and apply are pretty interchangeable. 
 * Both execute the current function immediately. 
 * You need to decide whether it’s easier to send in an array or a comma separated list of arguments. 
 * Whereas Bind creates a new function that will have this set to the first parameter passed to bind(). */