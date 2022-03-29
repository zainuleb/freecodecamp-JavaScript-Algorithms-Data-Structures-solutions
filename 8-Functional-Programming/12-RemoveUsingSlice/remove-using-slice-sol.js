/* 
                        Remove Elements from an Array Using slice Instead of splice

A common pattern while working with arrays is when you want to remove items and keep the rest of the array. JavaScript offers
the splice method for this, which takes arguments for the index of where to start removing items, then the number of items
to remove.

Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a 
length of 3, and return a new array with only the first three items.

Do not mutate the original array provided to the function.
*/

function nonMutatingSplice(cities) {
  // Only change code below this line
  const arr = cities.slice(0, 3);
  return arr;

  // Only change code above this line
}

const inputCities = ['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'];
nonMutatingSplice(inputCities);

/* 
Your code should use the slice method.
Your code should not use the splice method.
The inputCities array should not change.
nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]) should return ["Chicago", "Delhi", "Islamabad"].
*/
