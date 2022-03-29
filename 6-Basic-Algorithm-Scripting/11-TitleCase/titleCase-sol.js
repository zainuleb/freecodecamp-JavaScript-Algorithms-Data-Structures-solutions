/* 
    Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of. */

function titleCase(str) {
  str = str.toLowerCase();
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    let cap = strArr[i][0].toUpperCase();
    strArr[i] = cap + strArr[i].slice(1, strArr[i].length);
  }
  return strArr.join(' ');
}

titleCase("i'm a liTTle teaaaasss pot");

//Test Cases
/* 
titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout. 
*/
