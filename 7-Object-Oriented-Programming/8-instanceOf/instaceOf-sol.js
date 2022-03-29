/* 

                    Verify an Object's Constructor with instanceof
Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. 
JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare 
an object to a constructor, returning true or false based on whether or not that object was created with the constructor. 

Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof 
to verify that it is an instance of House

*/

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(34);
/* myHouse instanceof House; */

/* 
myHouse should have a numBedrooms attribute set to a number.
You should verify that myHouse is an instance of House using the instanceof operator.
*/
