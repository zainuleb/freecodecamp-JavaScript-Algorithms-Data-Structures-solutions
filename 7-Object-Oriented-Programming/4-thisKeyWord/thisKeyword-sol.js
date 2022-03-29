/* 
                    Make Code More Reusable with the this Keyword

The last challenge introduced a method to the duck object. It used duck.name dot notation 
to access the value for the name property within the return statement

Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.
*/

let dog = {
  name: 'Spot',
  numLegs: 4,
  sayLegs: function () {
    return 'This dog has ' + this.numLegs + ' legs.';
  },
};

console.log(dog.sayLegs());

/* 
dog.sayLegs() should return the given string.
Your code should use the this keyword to access the numLegs property of dog.
*/
