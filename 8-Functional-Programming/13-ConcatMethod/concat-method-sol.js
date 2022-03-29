/* 
                    Combine Two Arrays Using the concat Method

Concatenation means to join items end to end. JavaScript offers the concat method for both strings and arrays that work 
in the same way. For arrays, the method is called on one, then another array is provided as the argument to concat,
which is added to the end of the first array.
*/
function nonMutatingConcat(original, attach) {
  // Only change code below this line
  return original.concat(attach);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);
/* 
Your code should use the concat method.
The first array should not change.
The second array should not change.
nonMutatingConcat([1, 2, 3], [4, 5]) should return [1, 2, 3, 4, 5].
*/
