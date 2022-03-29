/*                      
                    Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access 
each member with array syntax arr[i]. */

const largestOfFour = (arr) => {
  const largeArr = [];
  for (let i = 0; i < arr.length; i++) {
    let max = 0;
    if (arr[i][1] < 0) max = arr[i][1] - 1;
    arr[i].map((j) => (j > max ? (max = j) : ''));
    largeArr.push(max);
  }
  console.log(largeArr);
};

largestOfFour([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
]);
