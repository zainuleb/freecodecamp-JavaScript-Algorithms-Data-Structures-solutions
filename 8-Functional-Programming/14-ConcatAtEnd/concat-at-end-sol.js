/* 
            Add Elements to the End of an Array Using concat Instead of push

The last challenge introduced the concat method as a way to combine arrays into a new one without mutating the original 
arrays. Compare concat to the push method. push adds an item to the end of the same array it is called on, which mutates 
that array.

Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function 
should return an array.
*/

function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return [...original].concat(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);

/* 
Your code should use the concat method.
Your code should not use the push method.
The first array should not change.
The second array should not change.
nonMutatingPush([1, 2, 3], [4, 5]) should return [1, 2, 3, 4, 5].
*/
