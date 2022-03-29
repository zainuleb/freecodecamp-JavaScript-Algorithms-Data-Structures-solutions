/* 
Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):
*/

function checkbr(str) {
  var c = 0;
  var numb = 0;
  for (let i = 0; i < str.length; i++) {
    if (c != 0) numb += 1;
    if (str[i] === '(') c += 1;
    if (str[i] === ')') c -= 1;
  }
  if (numb > 5) return false;
  if (c === 0) return true;
  return false;
}

function checkhy(str) {
  var hy = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-') hy += 1;
  }
  if (hy <= 2) return true;
  return false;
}

function telephoneCheck(str) {
  if (str[0] == '-') return false;
  if (checkbr(str) == false) return false;
  if (checkhy(str) == false) return false;
  str = str.replace(/-|\.|[()]|\s/g, '');
  console.log(str);
  if (str.length === 11 && str[0] !== '1') return false;
  if (str.length === 11 && str[0] === '1') return true;
  if (str.length === 10) return true;
  return false;
}

console.log(telephoneCheck('1 (555) 555-5555'));
/* 
telephoneCheck("555-555-5555") should return a boolean.
telephoneCheck("1 555-555-5555") should return true.
telephoneCheck("1 (555) 555-5555") should return true.
telephoneCheck("5555555555") should return true.
telephoneCheck("555-555-5555") should return true.
telephoneCheck("(555)555-5555") should return true.
telephoneCheck("1(555)555-5555") should return true.
telephoneCheck("555-5555") should return false.
telephoneCheck("5555555") should return false.
telephoneCheck("1 555)555-5555") should return false.
telephoneCheck("1 555 555 5555") should return true.
telephoneCheck("1 456 789 4444") should return true.
telephoneCheck("123**&!!asdf#") should return false.
telephoneCheck("55555555") should return false.
telephoneCheck("(6054756961)") should return false.
telephoneCheck("2 (757) 622-7382") should return false.
telephoneCheck("0 (757) 622-7382") should return false.
telephoneCheck("-1 (757) 622-7382") should return false.
telephoneCheck("2 757 622-7382") should return false.
telephoneCheck("10 (757) 622-7382") should return false.
telephoneCheck("27576227382") should return false.
telephoneCheck("(275)76227382") should return false.
telephoneCheck("2(757)6227382") should return false.
telephoneCheck("2(757)622-7382") should return false.
telephoneCheck("555)-555-5555") should return false.
telephoneCheck("(555-555-5555") should return false.
telephoneCheck("(555)5(55?)-5555") should return false.
telephoneCheck("55 55-55-555-5") should return false.
telephoneCheck("11 555-555-5555") should return false.
*/
