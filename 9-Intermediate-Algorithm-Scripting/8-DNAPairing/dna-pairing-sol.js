/* 
                DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/
function pairElement(str) {
  let pairArr = [];
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'A':
        pairArr.push(['A', 'T']);
        break;
      case 'T':
        pairArr.push(['T', 'A']);
        break;
      case 'G':
        pairArr.push(['G', 'C']);
        break;
      case 'C':
        pairArr.push(['C', 'G']);
        break;
      default:
        break;
    }
  }
  console.log(pairArr);
}

pairElement('GCG');
/* 
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/
