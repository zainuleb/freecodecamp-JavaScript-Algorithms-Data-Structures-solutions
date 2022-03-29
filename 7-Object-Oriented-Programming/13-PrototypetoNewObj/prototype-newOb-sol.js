/* 
            Change the Prototype to a New Object

Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting 
the prototype to a new object.
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 0,
  eat: () => {
    console.log('I am Eating now');
  },
  describe: () => {
    console.log('I am describing now and soon will be eating');
  },
};

/* 
Dog.prototype should be set to a new object.
Dog.prototype should have the property numLegs.
Dog.prototype should have the method eat().
Dog.prototype should have the method describe().
*/
