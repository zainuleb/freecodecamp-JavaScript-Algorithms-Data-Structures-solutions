/* 
                        Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
 Return the truncated string with a ... ending. 
 
 */

function truncateString(str, num) {
  if (str.length <= num) return str;

  return str.substring(0, num) + '...';
}

console.log(truncateString('Peter Piper picked a peck of pickled peppers', 11));

//Test Cases Below
/* truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket....

truncateString("Peter Piper picked a peck of pickled peppers", 11) should return the string Peter Piper....

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return the string A-tisket a-tasket A green and yellow basket.

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return the string A-tisket a-tasket A green and yellow basket.

truncateString("A-", 1) should return the string A....

truncateString("Absolutely Longer", 2) should return the string Ab.... */
