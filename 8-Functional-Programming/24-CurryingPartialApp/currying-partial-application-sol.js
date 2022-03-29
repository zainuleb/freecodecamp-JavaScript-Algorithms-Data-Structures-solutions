/* 
                    Introduction to Currying and Partial Application
                    
The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity 
into N functions of arity 1.

Fill in the body of the add function so it uses currying to add parameters x, y, and z.
*/

function add(x) {
  // Only change code below this line
  return (y) => {
    return (z) => {
      return x + y + z;
    };
  };

  // Only change code above this line
}

add(10)(20)(30);

/* 
add(10)(20)(30) should return 60.
add(1)(2)(3) should return 6.
add(11)(22)(33) should return 66.
Your code should include a final statement that returns x + y + z. 
*/
