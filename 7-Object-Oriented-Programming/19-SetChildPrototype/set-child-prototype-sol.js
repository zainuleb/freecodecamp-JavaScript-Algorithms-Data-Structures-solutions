/* 

            Set the Child's Prototype to an Instance of the Parent

This challenge covers the next step: set the prototype of the subtype (or child)—in this case, Bird—to be an instance of 
Animal.
Remember that the prototype is like the "recipe" for creating an object. In a way, the recipe for Bird now includes all
 the key "ingredients" from Animal.

 Modify the code so that instances of Dog inherit from Animal.
*/

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log('nom nom nom');
  },
};

function Dog() {}

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();

/* 
Dog.prototype should be an instance of Animal.
*/
