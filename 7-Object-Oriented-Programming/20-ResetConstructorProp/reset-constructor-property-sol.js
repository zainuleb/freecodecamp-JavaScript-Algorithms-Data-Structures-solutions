/* 
                Reset an Inherited Constructor Property

When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

Fix the code so duck.constructor and beagle.constructor return their respective constructors.
*/

function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

/* 
Bird.prototype should be an instance of Animal.
duck.constructor should return Bird.
Dog.prototype should be an instance of Animal.
beagle.constructor should return Dog.*/
