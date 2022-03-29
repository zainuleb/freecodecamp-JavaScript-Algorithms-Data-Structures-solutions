/* 
                Sort an Array Alphabetically using the sort Method

Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order. 
The function should return the sorted array.
*/

function alphabeticalOrder(arr) {
  // Only change code below this line
  return arr.sort((a, b) => {
    return a === b ? 0 : a > b ? 1 : -1;
  });
  // Only change code above this line
}

console.log(alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g']));

/* 
Your code should use the sort method.
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]) should return ["a", "a", "c", "d", "g", "z"].
alphabeticalOrder(["x", "h", "a", "m", "n", "m"]) should return ["a", "h", "m", "m", "n", "x"].
alphabeticalOrder(["a", "a", "a", "a", "x", "t"]) should return ["a", "a", "a", "a", "t", "x"].
*/
