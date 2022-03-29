/* 
                                Iterate Over All Properties

You have now seen two kinds of properties: own properties and prototype properties. 
Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

Add all of the own properties of beagle to the array ownProps. 
Add all of the prototype properties of Dog to the array prototypeProps.

*/

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog('Snoopy');

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (let prop in beagle) {
  if (beagle.hasOwnProperty(prop)) ownProps.push(prop);
  else prototypeProps.push(prop);
}

/* function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog('Snoopy');

let ownProps = [];
let prototypeProps = []; */

// Only change code below this line

/* 
The ownProps array should only contain name.
The prototypeProps array should only contain numLegs.
You should solve this challenge without using the built in method Object.keys().

*/
