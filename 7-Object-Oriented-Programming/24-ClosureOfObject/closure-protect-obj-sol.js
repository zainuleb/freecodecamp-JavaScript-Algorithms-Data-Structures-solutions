/* 
            Use Closure to Protect Properties Within an Object from Being Modified Externally

The simplest way to make this public property private is by creating a variable within the constructor function. 
This changes the scope of that variable to be within the constructor function versus available globally. 
This way, the variable can only be accessed and changed by methods also within the constructor function.
*/

function Bird() {
  let weight = 15;
  this.getWeight = function () {
    return weight;
  };
}

/* 
The weight property should be a private variable and should be assigned the value of 15.
Your code should create a method in Bird called getWeight that returns the value of the private variable weight.
Your getWeight function should return the private variable weight.
*/
