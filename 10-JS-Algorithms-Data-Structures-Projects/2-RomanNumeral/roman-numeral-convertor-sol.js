/* 
Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/
const singleDigit = (num) => {
  switch (num) {
    case 1:
      return 'I';
      break;
    case 2:
      return 'II';
      break;
    case 3:
      return 'III';
      break;
    case 4:
      return 'IV';
      break;
    case 5:
      return 'V';
      break;
    case 6:
      return 'VI';
      break;
    case 7:
      return 'VII';
      break;
    case 8:
      return 'VIII';
      break;
    case 9:
      return 'IX';
      break;
    case 10:
      return 'X';
      break;
    default:
      return '';
  }
};

const doubleDigit = (num) => {
  switch (num) {
    case 10:
      return 'X';
      break;
    case 20:
      return 'XX';
      break;
    case 30:
      return 'XXX';
      break;
    case 40:
      return 'XL';
      break;
    case 50:
      return 'L';
      break;
    case 60:
      return 'LX';
      break;
    case 70:
      return 'LXX';
      break;
    case 80:
      return 'LXXX';
      break;
    case 90:
      return 'XC';
      break;
    default:
      return '';
  }
};

const tripleDigit = (num) => {
  switch (num) {
    case 100:
      return 'C';
      break;
    case 200:
      return 'CC';
      break;
    case 300:
      return 'CCC';
      break;
    case 400:
      return 'CD';
      break;
    case 500:
      return 'D';
      break;
    case 600:
      return 'DC';
      break;
    case 700:
      return 'DCC';
      break;
    case 800:
      return 'DCCC';
      break;
    case 900:
      return 'CM';
      break;
    default:
      return '';
  }
};

function convertToRoman(num) {
  let str = '';
  if (num < 10) {
    str = singleDigit(num);
  }
  if (num / 10 < 100) {
    const double = num - (num % 10);
    str = doubleDigit(double);
    str += singleDigit(num % 10);
  }
  if (num < 1000) {
    const triple = num - (num % 100);
    str = tripleDigit(triple);
    str += doubleDigit((num % 100) - (num % 10));
    str += singleDigit(num % 10);
    console.log(str);
  }
  if (num >= 1000) {
    for (let i = 0; i < Math.floor(num / 1000); i++) {
      str += 'M';
    }
    str += tripleDigit((num % 1000) - (num % 100));
    str += doubleDigit((num % 100) - (num % 10));
    str += singleDigit(num % 10);
  }
  return str;
}

convertToRoman(3999);
/* 
convertToRoman(2) should return the string II.
convertToRoman(3) should return the string III.
convertToRoman(4) should return the string IV.
convertToRoman(5) should return the string V.
convertToRoman(9) should return the string IX.
convertToRoman(12) should return the string XII.
convertToRoman(16) should return the string XVI.
convertToRoman(29) should return the string XXIX.
convertToRoman(44) should return the string XLIV.
convertToRoman(45) should return the string XLV.
convertToRoman(68) should return the string LXVIII
convertToRoman(83) should return the string LXXXIII
convertToRoman(97) should return the string XCVII
convertToRoman(99) should return the string XCIX
convertToRoman(400) should return the string CD
convertToRoman(500) should return the string D
convertToRoman(501) should return the string DI
convertToRoman(649) should return the string DCXLIX
convertToRoman(798) should return the string DCCXCVIII
convertToRoman(891) should return the string DCCCXCI
convertToRoman(1000) should return the string M
convertToRoman(1004) should return the string MIV
convertToRoman(1006) should return the string MVI
convertToRoman(1023) should return the string MXXIII
convertToRoman(2014) should return the string MMXIV
convertToRoman(3999) should return the string MMMCMXCIX
*/
