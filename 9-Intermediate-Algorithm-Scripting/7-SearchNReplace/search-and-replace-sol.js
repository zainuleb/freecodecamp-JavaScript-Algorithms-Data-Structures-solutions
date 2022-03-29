/* 
                    Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it.
*/

function myReplace(str, before, after) {
  const list = str.split(' ');
  for (let i = 0; i < list.length; i++) {
    if (list[i] === before) {
      if (list[i][0] === list[i][0].toUpperCase())
        after = after.charAt(0).toUpperCase() + after.slice(1);
      if (list[i][0] === list[i][0].toLowerCase())
        after = after.charAt(0).toLowerCase() + after.slice(1);

      list.splice(i, 1, after);
      return list.join(' ');
    }
  }
}

console.log(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'));

/* 
myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.
myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.
myReplace("This has a spellngi error", "spellngi", "spelling") should return the string This has a spelling error.
myReplace("His name is Tom", "Tom", "john") should return the string His name is John.
myReplace("Let us get back to more Coding", "Coding", "algorithms") should return the string Let us get back to more Algorithms.
*/
