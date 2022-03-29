/* 

                    Create a Method on an Object

Objects can have a special type of property, called a method.
Methods are properties that are functions. This adds different behavior to an object.

Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.

*/

let dog = {
  name: 'Spot',
  numLegs: 4,
  sayLegs() {
    return `This dog has ${this.numLegs} legs.`;
  },
};

console.log(dog.sayLegs());

/* 
dog.sayLegs() should be a function.
dog.sayLegs() should return the given string - note that punctuation and spacing matter. 
*/
