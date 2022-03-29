/* 
                    Extend Constructors to Receive Arguments

The Bird and Dog constructors from the last challenge worked well. However, notice that all Birds that are created 
with the Bird constructor are automatically named Albert, are blue in color, and have two legs.

Create another Dog constructor. This time, set it up to take the parameters name and color, 
and have the property numLegs fixed at 4. 
Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.
*/

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog('Kalb', 'neela');

/* 
Dog should receive an argument for name.
Dog should receive an argument for color.
Dog should have property numLegs set to 4.
terrier should be created using the Dog constructor.
*/
