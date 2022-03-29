/* 
            Add Methods After Inheritance

A constructor function that inherits its prototype object from a supertype constructor function can still have its own 
methods in addition to inherited methods.

Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. 
Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print
 Woof! to the console.
*/
function Animal() {}
Animal.prototype.eat = function () {
  console.log('nom nom nom');
};

function Dog() {}

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log('Woof!');
};
// Only change code above this line

let beagle = new Dog();

/* 
Animal should not respond to the bark() method.
Dog should inherit the eat() method from Animal.
The Dog prototype should have a bark() method.
beagle should be an instanceof Animal.
The constructor for beagle should be set to Dog.
beagle.eat() should log the string nom nom nom
beagle.bark() should log the string Woof!
*/
