/* 
                    Split a String into an Array Using the split Method

The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character 
to use to break up the string or a regular expression.


Use the split method inside the splitify function to split str into an array of words. The function should return the array. 
Note that the words are not always separated by spaces, and the array should not contain punctuation.
*/

function splitify(str) {
  // Only change code below this line
  return str.split(/\W/);

  // Only change code above this line
}

splitify('Hello World,I-am code');

/* 
Your code should use the split method.
splitify("Hello World,I-am code") should return ["Hello", "World", "I", "am", "code"].
splitify("Earth-is-our home") should return ["Earth", "is", "our", "home"].
splitify("This.is.a-sentence") should return ["This", "is", "a", "sentence"].
*/
