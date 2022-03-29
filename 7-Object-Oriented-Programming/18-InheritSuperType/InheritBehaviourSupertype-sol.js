/* 
                    Inherit Behaviors from a Supertype
Object.create(obj) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like 
the "recipe" for creating an object. By setting the prototype of animal to be the prototype of Animal, 
you are effectively giving the animal instance the same "recipe" as any other instance of Animal

Use Object.create to make two instances of Animal named duck and beagle.
*/

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log('nom nom nom');
  },
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

/* 
The duck variable should be defined.
The beagle variable should be defined.
The duck variable should be initialised with Object.create.
The beagle variable should be initialised with Object.create.
duck should have a prototype of Animal.
beagle should have a prototype of Animal.
*/
