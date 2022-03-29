/* 
                    Override Inherited Methods

ChildObject.prototype = Object.create(ParentObject.prototype);
Then the ChildObject received its own methods by chaining them onto its prototype:

ChildObject.prototype.methodName = function() {...};

Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.
*/

function Bird() {}

Bird.prototype.fly = function () {
  return 'I am flying!';
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = function () {
  return 'Alas, this is a flightless bird.';
};
// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

/* 
penguin.fly() should return the string Alas, this is a flightless bird.
The bird.fly() method should return the string I am flying! */
