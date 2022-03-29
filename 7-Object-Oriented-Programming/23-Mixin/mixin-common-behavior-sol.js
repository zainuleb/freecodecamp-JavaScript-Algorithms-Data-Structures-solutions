/*

                        Use a Mixin to Add Common Behavior Between Unrelated Objects
As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution.
Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of 
Airplane and vice versa.

Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat 
the ability to glide.

*/

let bird = {
  name: 'Donald',
  numLegs: 2,
};

let boat = {
  name: 'Warrior',
  type: 'race-boat',
};

// Only change code below this line
let glideMixin = function (obj) {
  obj.glide = function () {
    console.log('Gliding, wooosh!');
  };
};

glideMixin(bird);
glideMixin(boat);

// Only change code below this line
/* 
Your code should declare a glideMixin variable that is a function.
Your code should use the glideMixin on the bird object to give it the glide method.
Your code should use the glideMixin on the boat object to give it the glide method. */
