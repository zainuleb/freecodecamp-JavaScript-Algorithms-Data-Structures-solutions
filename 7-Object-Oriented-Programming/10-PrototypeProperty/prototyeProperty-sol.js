/* 

                    Use Prototype Properties to Reduce Duplicate Code

Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable numLegs
 inside each Bird instance. This may not be an issue when there are only two instances, but imagine if there are millions 
of instances. That would be a lot of duplicated variables. A better way is to use the prototype of Bird. 
Properties in the prototype are shared among ALL instances of Bird

Add a numLegs property to the prototype of Dog
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog('Snoopy');
console.log(beagle.numLegs);

/* 
beagle should have a numLegs property.
beagle.numLegs should be a number.
numLegs should be a prototype property not an own property.
*/
