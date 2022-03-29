/* 
                        Refactor Global Variables Out of Functions

Rewrite the code so the global array bookList is not changed inside either function. The add function should add the 
given bookName to the end of the array passed to it and return a new array (list). The remove function should remove 
the given bookName from the array passed to it.

Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.
*/

// The global variable
const bookList = [
  'The Hound of the Baskervilles',
  'On The Electrodynamics of Moving Bodies',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae',
];

// Change code below this line
function add(bookList, bookName) {
  const newBookList = [...bookList];
  newBookList.push(bookName);
  return newBookList;

  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  const newBookList = [...bookList];
  const book_index = newBookList.indexOf(bookName);
  if (book_index >= 0) {
    newBookList.splice(book_index, 1);
    return newBookList;

    // Change code above this line
  }
}

console.log(add(bookList, 'A Brief History of Time'), bookList);
/* console.log(add(bookList, 'On The Electrodynamics of Moving Bodies')); */

/*
bookList should not change and still equal ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies",
 "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].

add(bookList, "A Brief History of Time") should return ["The Hound of the Baskervilles", "On The Electrodynamics of Moving
 Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].

remove(bookList, "On The Electrodynamics of Moving Bodies") should return ["The Hound of the Baskervilles", "Philosophiæ 
Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].

remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies"); should equal ["The Hound of
 the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].

*/
