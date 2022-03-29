/* 
                    Understand Where an Object’s Prototype Comes From

Just like people inherit genes from their parents, an object inherits its prototype directly 
from the constructor function that created it.

*/
function Dog(name) {
  this.name = name;
}

let beagle = new Dog('Snoopy');

// Only change code below this line
Dog.prototype.isPrototypeOf(beagle);
/* 
Use isPrototypeOf to check the prototype of beagle.
*/
