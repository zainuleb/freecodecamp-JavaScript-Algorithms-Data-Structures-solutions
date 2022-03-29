/* 
                    Missing 
                    
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/
function fearNotLetter(str) {
  let lowerStr = str.toLowerCase();
  let startChar = lowerStr[0].charCodeAt(0);

  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] !== String.fromCharCode(startChar + i)) {
      return String.fromCharCode(startChar + i);
    }
  }
  return undefined;
}

fearNotLetter('abcdefghjklno');
/* 
fearNotLetter("abce") should return the string d.
fearNotLetter("abcdefghjklmno") should return the string i.
fearNotLetter("stvwx") should return the string u.
fearNotLetter("bcdf") should return the string e.
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/
