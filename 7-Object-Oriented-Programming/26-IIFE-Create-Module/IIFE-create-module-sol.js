/* 
                    Use an IIFE to Create a Module

Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule. 
This returned object contains all of the mixin behaviors as properties of the object. The advantage of the 
module pattern is that all of the motion behaviors can be packaged into a single object that can then be used 
by other parts of your code.

Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.
 */

let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log('Singing to an awesome tune');
      };
    },
  };
})();

/* 
funModule should be defined and return an object.
funModule.isCuteMixin should access a function.
funModule.singMixin should access a function.
*/
