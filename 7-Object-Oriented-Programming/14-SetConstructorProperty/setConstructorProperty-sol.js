/* 
                Remember to Set the Constructor Property when Changing the Prototype
                
There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property!
Define the constructor property on the Dog prototype.
*/

function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function () {
    console.log('nom nom nom');
  },
  describe: function () {
    console.log('My name is ' + this.name);
  },
};

/* 
Dog.prototype should set the constructor property.
*/
