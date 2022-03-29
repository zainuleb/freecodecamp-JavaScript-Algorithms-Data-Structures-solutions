/* 

            Understand Own Properties

That means that duck and canary each has its own separate copy of these properties.
In fact every instance of Bird will have its own copy of these properties.

Add the own properties of canary to the array ownProps.

*/

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird('Tweety');
let ownProps = [];
// Only change code below this line
for (let prop in canary) {
  ownProps.push(prop);
}

console.log(ownProps);

/* 
ownProps should include the values numLegs and name.
You should solve this challenge without using the built in method Object.keys().
You should solve this challenge without hardcoding the ownProps array.
*/
