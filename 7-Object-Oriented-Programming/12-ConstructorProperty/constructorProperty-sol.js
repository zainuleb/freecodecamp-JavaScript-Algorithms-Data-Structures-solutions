/* 
    Understand the Constructor Property

    Write a joinDogFraternity function that takes a candidate parameter 
    and, using the constructor property, return true if the candidate is a Dog, otherwise return false.
*/

function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) return true;
  return false;
}

/* 

joinDogFraternity should be defined as a function.
joinDogFraternity should return true if candidate is an instance of Dog.
joinDogFraternity should use the constructor property.
*/
